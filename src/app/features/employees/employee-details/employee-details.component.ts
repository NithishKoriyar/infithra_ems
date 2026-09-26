import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterLink } from '@angular/router';

import { BreadcrumbService } from '../../../core/services/breadcrumb.service';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';
import { Employee, fullName } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { EmployeeActivityComponent } from './employee-activity/employee-activity.component';
import { EmployeeDocumentsComponent } from './employee-documents/employee-documents.component';
import { EmployeeHeaderComponent } from './employee-header/employee-header.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';

const TABS = ['overview', 'documents', 'activity'] as const;

@Component({
  selector: 'app-employee-details',
  imports: [
    EmployeeActivityComponent,
    EmployeeDocumentsComponent,
    EmployeeHeaderComponent,
    EmployeeOverviewComponent,
    EmptyStateComponent,
    MatButtonModule,
    MatTabsModule,
    RouterLink,
  ],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsComponent implements OnInit {
  private readonly employees = inject(EmployeeService);
  private readonly breadcrumbs = inject(BreadcrumbService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  /** Route param, bound via withComponentInputBinding(). */
  readonly id = input.required<string>();
  /** `?tab=` query param, so a tab can be deep-linked. */
  readonly tab = input<string>();

  readonly employee = signal<Employee | null>(null);
  readonly loading = signal(true);
  readonly notFound = signal(false);

  protected readonly tabIndex = computed(() =>
    Math.max(0, TABS.indexOf(this.tab() as (typeof TABS)[number])),
  );

  ngOnInit(): void {
    const id = Number(this.id());
    if (!Number.isInteger(id)) {
      this.loading.set(false);
      this.notFound.set(true);
      return;
    }
    this.employees
      .getEmployee(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (employee) => {
          this.employee.set(employee);
          this.loading.set(false);
          this.breadcrumbs.setLabel(fullName(employee));
        },
        error: () => {
          this.loading.set(false);
          this.notFound.set(true);
        },
      });
  }

  protected selectTab(index: number): void {
    void this.router.navigate([], {
      queryParams: { tab: index === 0 ? null : TABS[index] },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
