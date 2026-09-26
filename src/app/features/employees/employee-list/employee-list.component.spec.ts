import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router, provideRouter } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

import { NotificationService } from '../../../core/services/notification.service';
import { ConfirmationDialogData } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Employee } from '../models/employee.model';
import { EmployeeDropdownService } from '../services/employee-dropdown.service';
import { EmployeeService } from '../services/employee.service';
import { EMPLOYEE_VIEW_STORAGE_KEY, EmployeeListComponent } from './employee-list.component';

function employee(
  id: number,
  employeeId: string,
  firstName: string,
  lastName: string,
  department: string,
  joiningDate: string,
): Employee {
  return {
    id,
    employeeId,
    firstName,
    lastName,
    email: `${firstName}.${lastName.replace(/\s/g, '')}@company.ae`.toLowerCase(),
    countryCode: '+971',
    mobile: '501234567',
    dateOfBirth: '1990-01-01',
    gender: 'Female',
    nationality: 'India',
    photoUrl: null,
    department,
    designation: 'Analyst',
    joiningDate,
    employmentType: 'Full-time',
    contractEndDate: null,
    shiftStart: '09:00',
    shiftEnd: '17:00',
    skills: [],
    salary: 10000,
    documents: [],
    status: 'Active',
    notes: '',
    activity: [],
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
  };
}

const EMPLOYEES: Employee[] = [
  employee(1, 'E-1000', 'Rashid', 'Mansoor', 'Finance', '2019-04-14'),
  employee(2, 'E-1001', 'Sara', 'Ahmed', 'Finance', '2026-03-01'),
  employee(3, 'E-1002', 'Omar', 'Haddad', 'Sales', '2026-03-25'),
  employee(4, 'E-1004', 'Arjun', 'Menon', 'IT', '2022-08-01'),
  employee(5, 'E-1007', 'Noura', 'Al Mansoori', 'HR', '2026-07-01'),
  employee(6, 'E-1010', 'Layla', 'Hassan', 'IT', '2024-09-01'),
  employee(7, 'E-1014', 'Priya', 'Nair', 'IT', '2025-11-02'),
];

describe('EmployeeListComponent', () => {
  let getEmployees: ReturnType<typeof vi.fn<() => Observable<Employee[]>>>;
  let deleteEmployee: ReturnType<typeof vi.fn<(id: number) => Observable<void>>>;
  let dialogResult: boolean | undefined;
  let openDialog: ReturnType<
    typeof vi.fn<(component: unknown, config: { data: ConfirmationDialogData }) => unknown>
  >;
  let notifications: { success: ReturnType<typeof vi.fn>; error: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    localStorage.clear();
    getEmployees = vi.fn(() => of(structuredClone(EMPLOYEES)));
    deleteEmployee = vi.fn(() => of(undefined));
    dialogResult = undefined;
    openDialog = vi.fn(() => ({ afterClosed: () => of(dialogResult) }));
    notifications = { success: vi.fn(), error: vi.fn() };

    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: EmployeeService, useValue: { getEmployees, deleteEmployee } },
        {
          provide: EmployeeDropdownService,
          useValue: { getDepartments: () => of([{ id: 2, name: 'IT' }]) },
        },
        { provide: MatDialog, useValue: { open: openDialog } },
        { provide: NotificationService, useValue: notifications },
      ],
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    localStorage.clear();
  });

  async function create(): Promise<ComponentFixture<EmployeeListComponent>> {
    const fixture = TestBed.createComponent(EmployeeListComponent);
    await fixture.whenStable();
    return fixture;
  }

  const host = (fixture: ComponentFixture<EmployeeListComponent>) =>
    fixture.nativeElement as HTMLElement;
  const rowNames = (fixture: ComponentFixture<EmployeeListComponent>) =>
    Array.from(host(fixture).querySelectorAll('tr.mat-mdc-row .name')).map((a) =>
      a.textContent?.trim(),
    );
  const names = (list: readonly Employee[]) => list.map((e) => `${e.firstName} ${e.lastName}`);

  it('shows the first page of 5, newest joiner first', async () => {
    const fixture = await create();

    expect(rowNames(fixture)).toEqual([
      'Noura Al Mansoori',
      'Omar Haddad',
      'Sara Ahmed',
      'Priya Nair',
      'Layla Hassan',
    ]);
    expect(fixture.componentInstance.sort()).toEqual({ field: 'joiningDate', direction: 'desc' });
  });

  describe('search', () => {
    function type(fixture: ComponentFixture<EmployeeListComponent>, text: string): void {
      const input = host(fixture).querySelector<HTMLInputElement>('input[type=search]');
      if (!input) {
        throw new Error('search input missing');
      }
      input.value = text;
      input.dispatchEvent(new Event('input'));
    }

    it('filters after a 300ms debounce, case-insensitively', async () => {
      const fixture = await create();
      const list = fixture.componentInstance;
      vi.useFakeTimers();

      type(fixture, 'SARA');
      vi.advanceTimersByTime(299);
      expect(list.filtered()).toHaveLength(7);

      vi.advanceTimersByTime(1);
      expect(list.search()).toBe('SARA');
      expect(names(list.filtered())).toEqual(['Sara Ahmed']);
    });

    it.each([
      ['full name', 'priya nair', ['Priya Nair']],
      ['employee ID', 'e-1004', ['Arjun Menon']],
      ['email', 'omar.haddad@', ['Omar Haddad']],
    ])('matches on %s', async (_, term, expected) => {
      const fixture = await create();
      vi.useFakeTimers();

      type(fixture, term);
      vi.advanceTimersByTime(300);

      expect(names(fixture.componentInstance.filtered())).toEqual(expected);
    });
  });

  it('filters by department, and "All Departments" clears it', async () => {
    const list = (await create()).componentInstance;

    list.setDepartment('IT');
    expect(names(list.filtered())).toEqual(['Arjun Menon', 'Layla Hassan', 'Priya Nair']);

    list.setDepartment('');
    expect(list.department()).toBeNull();
    expect(list.filtered()).toHaveLength(7);
  });

  it('sorts by name when the Name header is clicked, then reverses', async () => {
    const fixture = await create();
    const header = host(fixture).querySelector<HTMLElement>(
      'th.mat-column-name .mat-sort-header-container',
    );

    header?.click();
    await fixture.whenStable();
    expect(fixture.componentInstance.sort()).toEqual({ field: 'name', direction: 'asc' });
    expect(names(fixture.componentInstance.sorted())).toEqual([
      'Arjun Menon',
      'Layla Hassan',
      'Noura Al Mansoori',
      'Omar Haddad',
      'Priya Nair',
      'Rashid Mansoor',
      'Sara Ahmed',
    ]);

    header?.click();
    await fixture.whenStable();
    expect(names(fixture.componentInstance.sorted())[0]).toBe('Sara Ahmed');
  });

  it('sorts by joining date ascending', async () => {
    const list = (await create()).componentInstance;

    list.sort.set({ field: 'joiningDate', direction: 'asc' });

    expect(list.sorted().map((e) => e.joiningDate)).toEqual([
      '2019-04-14',
      '2022-08-01',
      '2024-09-01',
      '2025-11-02',
      '2026-03-01',
      '2026-03-25',
      '2026-07-01',
    ]);
  });

  it('pages with the paginator and returns to page 1 when search or department changes', async () => {
    const fixture = await create();
    const list = fixture.componentInstance;

    host(fixture).querySelector<HTMLButtonElement>('.mat-mdc-paginator-navigation-next')?.click();
    await fixture.whenStable();
    expect(list.pageIndex()).toBe(1);
    expect(names(list.paged())).toEqual(['Arjun Menon', 'Rashid Mansoor']);

    list.setDepartment('Finance');
    expect(list.pageIndex()).toBe(0);

    list.pageIndex.set(1);
    list.search.set('a');
    expect(list.pageIndex()).toBe(0);
  });

  describe('delete', () => {
    const sara = EMPLOYEES[1];

    it('does nothing when the dialog is cancelled', async () => {
      const list = (await create()).componentInstance;
      dialogResult = false;

      list.confirmDelete(sara);

      expect(openDialog).toHaveBeenCalledOnce();
      expect(openDialog.mock.calls[0][1].data).toEqual({
        title: 'Delete employee?',
        message: 'Sara Ahmed (E-1001) will be permanently removed.',
        confirmText: 'Delete',
        cancelText: 'Cancel',
        danger: true,
      });
      expect(deleteEmployee).not.toHaveBeenCalled();
      expect(list.employees()).toHaveLength(7);
    });

    it('deletes, removes the row and confirms after the dialog returns true', async () => {
      const fixture = await create();
      dialogResult = true;

      fixture.componentInstance.confirmDelete(sara);
      await fixture.whenStable();

      expect(deleteEmployee).toHaveBeenCalledWith(2);
      expect(names(fixture.componentInstance.employees())).not.toContain('Sara Ahmed');
      expect(rowNames(fixture)).not.toContain('Sara Ahmed');
      expect(notifications.success).toHaveBeenCalledWith('Employee deleted');
    });

    it('keeps the row and shows an error toast when the delete fails', async () => {
      const list = (await create()).componentInstance;
      dialogResult = true;
      deleteEmployee.mockReturnValue(
        throwError(() => new Error("Couldn't delete the employee. The server ran into a problem.")),
      );

      list.confirmDelete(sara);

      expect(notifications.error).toHaveBeenCalledWith(
        "Couldn't delete the employee. The server ran into a problem.",
      );
      expect(notifications.success).not.toHaveBeenCalled();
      expect(list.employees()).toHaveLength(7);
    });
  });

  describe('CSV export', () => {
    const BOM = String.fromCharCode(0xfeff);

    async function exportCsv(list: EmployeeListComponent): Promise<{ csv: string; file: string }> {
      const createObjectURL = vi.fn((_: Blob) => 'blob:employees');
      Object.assign(URL, { createObjectURL, revokeObjectURL: vi.fn() });
      let file = '';
      vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (
        this: HTMLAnchorElement,
      ) {
        file = this.download;
      });

      list.exportCsv();

      // Blob.text() strips a leading BOM, so decode the raw bytes and keep it.
      const bytes = await createObjectURL.mock.calls[0][0].arrayBuffer();
      return { csv: new TextDecoder('utf-8', { ignoreBOM: true }).decode(bytes), file };
    }

    it('exports every filtered, sorted employee (not just the page) with a BOM and quoting', async () => {
      const list = (await create()).componentInstance;

      const { csv, file } = await exportCsv(list);

      const lines = csv.split('\r\n').filter(Boolean);
      expect(csv.startsWith(BOM)).toBe(true);
      expect(lines[0]).toBe(
        BOM + '"Employee ID","Name","Email","Department","Designation","Joining Date","Status"',
      );
      expect(lines).toHaveLength(8);
      expect(lines[1]).toBe(
        '"E-1007","Noura Al Mansoori","noura.almansoori@company.ae","HR","Analyst","2026-07-01","Active"',
      );
      expect(file).toMatch(/^employees-\d{4}-\d{2}-\d{2}\.csv$/);
    });

    it('respects the current filter', async () => {
      const list = (await create()).componentInstance;
      list.setDepartment('IT');

      const { csv } = await exportCsv(list);

      const ids = csv
        .split('\r\n')
        .slice(1)
        .filter(Boolean)
        .map((line) => line.split(',')[0]);
      expect(ids).toEqual(['"E-1014"', '"E-1010"', '"E-1004"']);
    });

    it('escapes quotes and neutralises formulas', async () => {
      getEmployees.mockReturnValue(
        of([{ ...EMPLOYEES[0], firstName: '=cmd', lastName: 'Say "hi"' }]),
      );
      const list = (await create()).componentInstance;

      const { csv } = await exportCsv(list);

      expect(csv).toContain(`"'=cmd Say ""hi"""`);
    });
  });

  describe('states', () => {
    const text = (fixture: ComponentFixture<EmployeeListComponent>) =>
      host(fixture).querySelector('app-empty-state')?.textContent ?? '';

    it('shows the error with a Retry that reloads', async () => {
      getEmployees.mockReturnValueOnce(throwError(() => new Error("Couldn't load employees.")));
      const fixture = await create();

      expect(text(fixture)).toContain("Couldn't load employees.");
      const retry = Array.from(host(fixture).querySelectorAll('app-empty-state button')).find((b) =>
        b.textContent?.includes('Retry'),
      ) as HTMLButtonElement;
      retry.click();
      await fixture.whenStable();

      expect(getEmployees).toHaveBeenCalledTimes(2);
      expect(rowNames(fixture)).toHaveLength(5);
    });

    it('shows "No employees found" and clears filters', async () => {
      const fixture = await create();
      fixture.componentInstance.search.set('zzz');
      fixture.componentInstance.setDepartment('IT');
      await fixture.whenStable();

      expect(text(fixture)).toContain('No employees found');
      expect(text(fixture)).toContain('Try a different name, ID or department.');

      host(fixture).querySelector<HTMLButtonElement>('app-empty-state button')?.click();
      await fixture.whenStable();

      expect(fixture.componentInstance.search()).toBe('');
      expect(fixture.componentInstance.department()).toBeNull();
      expect(rowNames(fixture)).toHaveLength(5);
    });

    it('shows "No employees yet" when there is no data', async () => {
      getEmployees.mockReturnValue(of([]));
      const fixture = await create();

      expect(text(fixture)).toContain('No employees yet');
      expect(host(fixture).querySelector('app-empty-state a')?.getAttribute('href')).toBe(
        '/employees/new',
      );
    });
  });

  describe('view toggle', () => {
    it('defaults to the table and remembers the cards choice', async () => {
      const fixture = await create();
      expect(fixture.componentInstance.view()).toBe('table');

      fixture.componentInstance.setView('cards');
      await fixture.whenStable();

      expect(localStorage.getItem(EMPLOYEE_VIEW_STORAGE_KEY)).toBe('cards');
      expect(host(fixture).querySelectorAll('app-employee-card')).toHaveLength(5);
      expect(host(fixture).querySelector('app-employee-table')).toBeNull();
    });

    it('restores the saved view', async () => {
      localStorage.setItem(EMPLOYEE_VIEW_STORAGE_KEY, 'cards');

      expect((await create()).componentInstance.view()).toBe('cards');
    });
  });

  it('navigates to view and edit', async () => {
    const list = (await create()).componentInstance;
    const navigate = vi.spyOn(TestBed.inject(Router), 'navigate').mockResolvedValue(true);

    list.open(EMPLOYEES[1]);
    list.edit(EMPLOYEES[1]);

    expect(navigate).toHaveBeenNthCalledWith(1, ['/employees', 2]);
    expect(navigate).toHaveBeenNthCalledWith(2, ['/employees', 2, 'edit']);
  });
});
