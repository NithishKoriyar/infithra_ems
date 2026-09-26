import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  computed,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { Router, RouterLink } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { NotificationService } from '../../../core/services/notification.service';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';
import { HasUnsavedChanges } from '../guards/unsaved-changes.guard';
import {
  ActivityEvent,
  Employee,
  EmployeeStatus,
  NewEmployeePayload,
  fullName,
} from '../models/employee.model';
import { EmployeeDropdownService } from '../services/employee-dropdown.service';
import { EmployeeService } from '../services/employee.service';
import { DayMonthYearDateAdapter } from './day-month-year-date-adapter';
import {
  EmployeeForm,
  createEmployeeForm,
  patchEmployeeForm,
  syncDependentControls,
  toIsoDate,
} from './employee-form.model';
import { JobStepComponent } from './steps/job-step/job-step.component';
import { OtherStepComponent } from './steps/other-step/other-step.component';
import { PersonalStepComponent } from './steps/personal-step/personal-step.component';

const VERTICAL_QUERY = '(max-width: 767.98px)';
const LAST_STEP = 2;

@Component({
  selector: 'app-employee-form',
  imports: [
    EmptyStateComponent,
    JobStepComponent,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    OtherStepComponent,
    PersonalStepComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: DateAdapter, useClass: DayMonthYearDateAdapter },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
  host: { '(window:beforeunload)': 'onBeforeUnload($event)' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit, HasUnsavedChanges {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly employees = inject(EmployeeService);
  private readonly notifications = inject(NotificationService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly breakpoints = inject(BreakpointObserver);

  /** Route param, bound via withComponentInputBinding(). Absent on /employees/new. */
  readonly id = input<string>();

  private readonly stepper = viewChild(MatStepper);
  private readonly nationalities = toSignal(
    inject(EmployeeDropdownService)
      .getNationalities()
      .pipe(
        map((list) => list.map((nationality) => nationality.name)),
        catchError(() => of([])),
      ),
    { initialValue: [] },
  );

  readonly form: EmployeeForm = createEmployeeForm(this.fb, this.nationalities);
  readonly employee = signal<Employee | null>(null);
  readonly loading = signal(false);
  readonly notFound = signal(false);
  readonly saving = signal(false);
  readonly step = signal(0);
  private saved = false;

  protected readonly isEdit = computed(() => this.id() !== undefined);
  protected readonly subtitle = computed(() => {
    const employee = this.employee();
    if (employee) {
      return `Update ${fullName(employee)}'s details.`;
    }
    return this.isEdit()
      ? "Update the employee's details."
      : "Enter the employee's details. Fields marked * are required.";
  });
  protected readonly vertical = toSignal(
    this.breakpoints.observe(VERTICAL_QUERY).pipe(map((state) => state.matches)),
    { initialValue: this.breakpoints.isMatched(VERTICAL_QUERY) },
  );

  constructor() {
    const job = this.form.controls.job.controls;
    job.department.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      job.designation.reset('', { emitEvent: false });
      syncDependentControls(this.form.controls.job);
    });
    job.employmentType.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => syncDependentControls(this.form.controls.job));
    job.joiningDate.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => job.contractEndDate.updateValueAndValidity());
    job.shiftStart.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => job.shiftEnd.updateValueAndValidity());

    // Nationality is checked against the list, which arrives after the form is built.
    effect(() => {
      if (this.nationalities().length) {
        this.form.controls.personal.controls.nationality.updateValueAndValidity();
      }
    });
  }

  ngOnInit(): void {
    const id = Number(this.id());
    if (!this.isEdit()) {
      return;
    }
    if (!Number.isInteger(id)) {
      this.notFound.set(true);
      return;
    }
    this.loading.set(true);
    this.employees
      .getEmployee(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (employee) => {
          patchEmployeeForm(this.form, this.fb, employee);
          this.employee.set(employee);
          this.loading.set(false);
        },
        error: (error: Error) => {
          this.loading.set(false);
          this.notFound.set(true);
          this.notifications.error(error.message);
        },
      });
  }

  hasUnsavedChanges(): boolean {
    return this.form.dirty && !this.saved;
  }

  protected onBeforeUnload(event: BeforeUnloadEvent): void {
    if (this.hasUnsavedChanges()) {
      event.preventDefault();
    }
  }

  protected back(): void {
    this.stepper()?.previous();
  }

  /** Advances only when the current step is valid; otherwise shows its errors. */
  protected next(): void {
    const group = this.stepGroup(this.step());
    if (group.invalid) {
      group.markAllAsTouched();
      this.focusFirstInvalid(this.step());
      return;
    }
    this.stepper()?.next();
  }

  protected save(): void {
    if (this.step() < LAST_STEP) {
      this.next();
      return;
    }
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const invalidStep = [0, 1, 2].find((index) => this.stepGroup(index).invalid) ?? LAST_STEP;
      const stepper = this.stepper();
      if (stepper && invalidStep !== this.step()) {
        stepper.selectedIndex = invalidStep;
      }
      this.focusFirstInvalid(invalidStep);
      return;
    }

    const original = this.employee();
    const payload = this.buildPayload(original);
    this.saving.set(true);
    const request = original
      ? this.employees.updateEmployee(original.id, { ...payload, employeeId: original.employeeId })
      : this.employees.addEmployee(payload);
    request.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.saved = true;
        this.notifications.success('Employee saved successfully');
        void this.router.navigate(['/employees']);
      },
      error: (error: Error) => {
        this.saving.set(false);
        this.notifications.error(error.message);
      },
    });
  }

  private buildPayload(original: Employee | null): NewEmployeePayload {
    const { personal, job, other } = this.form.getRawValue();
    const payload: NewEmployeePayload = {
      firstName: personal.firstName.trim(),
      lastName: personal.lastName.trim(),
      email: personal.email.trim(),
      countryCode: personal.countryCode,
      mobile: personal.mobile,
      dateOfBirth: personal.dateOfBirth ? toIsoDate(personal.dateOfBirth) : '',
      gender: personal.gender ?? 'Male',
      nationality: personal.nationality,
      photoUrl: personal.photoUrl,
      department: job.department,
      designation: job.designation,
      joiningDate: job.joiningDate ? toIsoDate(job.joiningDate) : '',
      employmentType: job.employmentType,
      contractEndDate:
        job.employmentType === 'Contract' && job.contractEndDate
          ? toIsoDate(job.contractEndDate)
          : null,
      shiftStart: job.shiftStart,
      shiftEnd: job.shiftEnd,
      skills: job.skills,
      salary: job.salary ?? 0,
      documents: other.documents.map((doc) => ({
        type: doc.type ?? 'Other',
        number: doc.number.trim(),
        expiryDate: doc.expiryDate ? toIsoDate(doc.expiryDate) : '',
        fileName: doc.fileName,
      })),
      status: statusFor(other.active, original),
      notes: other.notes.trim(),
      activity: original?.activity ?? [],
    };
    return { ...payload, activity: [...payload.activity, activityFor(original, payload)] };
  }

  private stepGroup(index: number) {
    const { personal, job, other } = this.form.controls;
    return [personal, job, other][index] ?? other;
  }

  /** Scrolls to and focuses the first invalid field of a step, once it's on screen. */
  private focusFirstInvalid(index: number): void {
    setTimeout(() => {
      const step = this.host.nativeElement.querySelector(`[data-step="${index}"]`);
      const invalid = step?.querySelector<HTMLElement>(
        'input.ng-invalid, textarea.ng-invalid, mat-select.ng-invalid, mat-radio-group.ng-invalid, mat-checkbox.ng-invalid',
      );
      if (!invalid) {
        return;
      }
      const target = invalid.matches('input, textarea, mat-select')
        ? invalid
        : (invalid.querySelector<HTMLElement>('input') ?? invalid);
      target.scrollIntoView({ block: 'center', behavior: 'smooth' });
      target.focus({ preventScroll: true });
    });
  }
}

/** New hires start on probation; an edit keeps probation unless the employee is switched off. */
function statusFor(active: boolean, original: Employee | null): EmployeeStatus {
  if (!active) {
    return 'Inactive';
  }
  if (!original) {
    return 'Probation';
  }
  return original.status === 'Probation' ? 'Probation' : 'Active';
}

function activityFor(original: Employee | null, next: NewEmployeePayload): ActivityEvent {
  const date = toIsoDate(new Date());
  if (!original) {
    return {
      type: 'joined',
      title: 'Joined the company',
      description: `Joined ${next.department} as ${next.designation}.`,
      date,
    };
  }
  if (original.salary !== next.salary) {
    return {
      type: 'salary',
      title: 'Salary revised',
      description: `Salary revised from ${formatAed(original.salary)} to ${formatAed(next.salary)}.`,
      date,
    };
  }
  return {
    type: 'updated',
    title: 'Profile updated',
    description: 'Employee details were updated.',
    date,
  };
}

function formatAed(amount: number): string {
  return `AED ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
