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
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { catchError, of, switchMap } from 'rxjs';

import { EmployeeDropdownService } from '../../../services/employee-dropdown.service';
import { AmountInputDirective } from '../../amount-input.directive';
import { JobForm, MAX_SKILLS } from '../../employee-form.model';

@Component({
  selector: 'app-job-step',
  imports: [
    AmountInputDirective,
    MatAutocompleteModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './job-step.component.html',
  styleUrl: './job-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobStepComponent implements OnInit {
  private readonly dropdowns = inject(EmployeeDropdownService);
  private readonly destroyRef = inject(DestroyRef);

  readonly form = input.required<JobForm>();

  protected readonly maxSkills = MAX_SKILLS;
  protected readonly today = new Date();
  protected readonly skillInput = new FormControl('', { nonNullable: true });
  protected readonly skillError = signal<string | null>(null);

  protected readonly departments = toSignal(
    this.dropdowns.getDepartments().pipe(catchError(() => of([]))),
    { initialValue: [] },
  );
  private readonly allSkills = toSignal(this.dropdowns.getSkills().pipe(catchError(() => of([]))), {
    initialValue: [],
  });

  private readonly department = signal('');
  private readonly departmentId = computed(
    () => this.departments().find((department) => department.name === this.department())?.id,
  );
  protected readonly designations = toSignal(
    toObservable(this.departmentId).pipe(
      switchMap((id) =>
        id === undefined
          ? of([])
          : this.dropdowns.getDesignations(id).pipe(catchError(() => of([]))),
      ),
    ),
    { initialValue: [] },
  );

  private readonly skillQuery = signal('');
  private readonly skills = signal<string[]>([]);
  protected readonly skillOptions = computed(() => {
    const query = this.skillQuery().trim().toLowerCase();
    const chosen = new Set(this.skills().map((skill) => skill.toLowerCase()));
    return this.allSkills().filter(
      (skill) => !chosen.has(skill.toLowerCase()) && skill.toLowerCase().includes(query),
    );
  });

  ngOnInit(): void {
    const { department, skills } = this.form().controls;
    this.department.set(department.value);
    this.skills.set(skills.value);
    department.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.department.set(value));
    skills.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.skills.set(value));
    this.skillInput.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.skillQuery.set(value));
  }

  protected addSkill(event: MatChipInputEvent): void {
    if (this.tryAddSkill(event.value)) {
      event.chipInput.clear();
    }
  }

  protected selectSkill(event: MatAutocompleteSelectedEvent, input: HTMLInputElement): void {
    this.tryAddSkill(String(event.option.value));
    input.value = '';
    this.skillInput.setValue('');
  }

  protected removeSkill(skill: string): void {
    const control = this.form().controls.skills;
    control.setValue(control.value.filter((item) => item !== skill));
    control.markAsDirty();
    this.skillError.set(null);
  }

  private tryAddSkill(raw: string): boolean {
    const skill = raw.trim();
    if (!skill) {
      return false;
    }
    const control = this.form().controls.skills;
    if (control.value.some((item) => item.toLowerCase() === skill.toLowerCase())) {
      this.skillError.set(`${skill} is already added`);
      return false;
    }
    if (control.value.length >= MAX_SKILLS) {
      this.skillError.set(`You can add up to ${MAX_SKILLS} skills`);
      return false;
    }
    control.setValue([...control.value, skill]);
    control.markAsDirty();
    this.skillError.set(null);
    return true;
  }
}
