import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  computed,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap } from 'rxjs';

import { NotificationService } from '../../../core/services/notification.service';
import { openConfirmationDialog } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';
import { LoadingSkeletonComponent } from '../../../shared/components/loading-skeleton/loading-skeleton.component';
import {
  DEFAULT_EMPLOYEE_FILTER,
  EMPLOYEE_PAGE_SIZE_OPTIONS,
  EmployeeListView,
  EmployeeSort,
  EmployeeSortField,
} from '../models/employee-filter.model';
import { Employee, fullName } from '../models/employee.model';
import { EmployeeDropdownService } from '../services/employee-dropdown.service';
import { EmployeeService } from '../services/employee.service';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { buildEmployeesCsv, employeesCsvFileName } from './employee-csv';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

export const EMPLOYEE_VIEW_STORAGE_KEY = 'infithra-employee-view';
const PHONE_QUERY = '(max-width: 767.98px)';
const SEARCH_DEBOUNCE_MS = 300;

@Component({
  selector: 'app-employee-list',
  imports: [
    EmployeeCardComponent,
    EmployeeTableComponent,
    EmptyStateComponent,
    LoadingSkeletonComponent,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
  host: { '[class.fit-height]': "view() === 'table'" },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  private readonly employeeService = inject(EmployeeService);
  private readonly dialog = inject(MatDialog);
  private readonly notifications = inject(NotificationService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly breakpointObserver = inject(BreakpointObserver);

  protected readonly pageSizeOptions = EMPLOYEE_PAGE_SIZE_OPTIONS;
  protected readonly searchControl = new FormControl('', { nonNullable: true });

  // State
  readonly employees = signal<Employee[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  /** Debounced search term that drives filtering. */
  readonly search = signal(DEFAULT_EMPLOYEE_FILTER.search);
  readonly department = signal<string | null>(DEFAULT_EMPLOYEE_FILTER.department);
  readonly view = signal<EmployeeListView>(this.initialView());
  readonly sort = signal<EmployeeSort>({
    field: DEFAULT_EMPLOYEE_FILTER.sortField,
    direction: DEFAULT_EMPLOYEE_FILTER.sortDirection,
  });
  /** Back to the first page whenever the search, department or sort changes. */
  readonly pageIndex = linkedSignal({
    source: () => [this.search(), this.department(), this.sort()],
    computation: () => DEFAULT_EMPLOYEE_FILTER.pageIndex,
  });
  readonly pageSize = signal(DEFAULT_EMPLOYEE_FILTER.pageSize);

  protected readonly compact = toSignal(
    this.breakpointObserver.observe(PHONE_QUERY).pipe(map((state) => state.matches)),
    { initialValue: this.breakpointObserver.isMatched(PHONE_QUERY) },
  );

  // The filter still works without the list (it just shows "All Departments"), so a failed
  // lookup isn't worth a second error message next to the list's own error state.
  protected readonly departments = toSignal(
    inject(EmployeeDropdownService)
      .getDepartments()
      .pipe(catchError(() => of([]))),
    { initialValue: [] },
  );

  // Derived: filtered → sorted → paged
  readonly filtered = computed(() => {
    const term = this.search().toLowerCase();
    const department = this.department();
    return this.employees().filter(
      (employee) =>
        (!department || employee.department === department) &&
        (!term || matchesSearch(employee, term)),
    );
  });

  readonly sorted = computed(() => {
    const { field, direction } = this.sort();
    if (!direction) {
      return this.filtered();
    }
    const factor = direction === 'asc' ? 1 : -1;
    return [...this.filtered()].sort(
      (a, b) =>
        compareBy(field, a, b) * factor ||
        a.employeeId.localeCompare(b.employeeId, undefined, { numeric: true }),
    );
  });

  /** Clamped, so deleting the last row of the last page doesn't strand the user on an empty page. */
  readonly currentPageIndex = computed(() => {
    const pageCount = Math.max(1, Math.ceil(this.sorted().length / this.pageSize()));
    return Math.min(this.pageIndex(), pageCount - 1);
  });

  readonly paged = computed(() => {
    const start = this.currentPageIndex() * this.pageSize();
    return this.sorted().slice(start, start + this.pageSize());
  });

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(SEARCH_DEBOUNCE_MS),
        map((term) => term.trim()),
        distinctUntilChanged(),
        takeUntilDestroyed(),
      )
      .subscribe((term) => this.search.set(term));

    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.employeeService
      .getEmployees()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (employees) => {
          this.employees.set(employees);
          this.loading.set(false);
        },
        error: (error: Error) => {
          this.error.set(error.message);
          this.loading.set(false);
        },
      });
  }

  setDepartment(department: string): void {
    this.department.set(department || null);
  }

  setView(view: EmployeeListView): void {
    this.view.set(view);
    try {
      this.document.defaultView?.localStorage.setItem(EMPLOYEE_VIEW_STORAGE_KEY, view);
    } catch {
      // Storage unavailable: the choice just isn't remembered.
    }
  }

  onPage(event: PageEvent): void {
    this.pageSize.set(event.pageSize);
    this.pageIndex.set(event.pageIndex);
  }

  clearSearch(): void {
    this.searchControl.setValue('');
    this.search.set('');
  }

  clearFilters(): void {
    this.clearSearch();
    this.department.set(null);
  }

  open(employee: Employee): void {
    void this.router.navigate(['/employees', employee.id]);
  }

  edit(employee: Employee): void {
    void this.router.navigate(['/employees', employee.id, 'edit']);
  }

  confirmDelete(employee: Employee): void {
    openConfirmationDialog(this.dialog, {
      title: 'Delete employee?',
      message: `${fullName(employee)} (${employee.employeeId}) will be permanently removed.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      danger: true,
    })
      .pipe(
        filter((confirmed) => confirmed),
        switchMap(() => this.employeeService.deleteEmployee(employee.id)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: () => {
          this.employees.update((list) => list.filter((item) => item.id !== employee.id));
          this.notifications.success('Employee deleted');
        },
        error: (error: Error) => this.notifications.error(error.message),
      });
  }

  /** Downloads every filtered + sorted employee, not just the visible page. */
  exportCsv(): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }
    const blob = new Blob([buildEmployeesCsv(this.sorted())], { type: 'text/csv;charset=utf-8' });
    const url = view.URL.createObjectURL(blob);
    const link = this.document.createElement('a');
    link.href = url;
    link.download = employeesCsvFileName(new Date());
    link.hidden = true;
    this.document.body.append(link);
    link.click();
    link.remove();
    view.setTimeout(() => view.URL.revokeObjectURL(url));
  }

  private initialView(): EmployeeListView {
    try {
      const saved = this.document.defaultView?.localStorage.getItem(EMPLOYEE_VIEW_STORAGE_KEY);
      if (saved === 'table' || saved === 'cards') {
        return saved;
      }
    } catch {
      // Storage unavailable: fall back to the screen-size default.
    }
    return this.breakpointObserver.isMatched(PHONE_QUERY) ? 'cards' : 'table';
  }
}

function matchesSearch(employee: Employee, term: string): boolean {
  return [fullName(employee), employee.employeeId, employee.email].some((value) =>
    value.toLowerCase().includes(term),
  );
}

function compareBy(field: EmployeeSortField, a: Employee, b: Employee): number {
  switch (field) {
    case 'name':
      return fullName(a).localeCompare(fullName(b), undefined, { sensitivity: 'base' });
    case 'employeeId':
      return a.employeeId.localeCompare(b.employeeId, undefined, { numeric: true });
    default:
      // ISO dates and plain strings both sort correctly as text.
      return a[field].localeCompare(b[field]);
  }
}
