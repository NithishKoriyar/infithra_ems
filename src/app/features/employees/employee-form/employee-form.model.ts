import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

import {
  DocumentType,
  Employee,
  EmployeeDocument,
  EmploymentType,
  Gender,
} from '../models/employee.model';
import {
  dateAfter,
  lettersOnly,
  minimumAge,
  mobileDigits,
  notFutureDate,
  oneOf,
  positiveAmount,
  timeAfter,
  uniqueDocumentTypes,
} from '../validators/employee.validators';

export const NOTES_MAX_LENGTH = 250;
export const MAX_SKILLS = 10;
const DOCUMENT_NUMBER = /^[A-Za-z0-9-]+$/;

export type PersonalForm = FormGroup<{
  photoUrl: FormControl<string | null>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  countryCode: FormControl<string>;
  mobile: FormControl<string>;
  dateOfBirth: FormControl<Date | null>;
  gender: FormControl<Gender | null>;
  nationality: FormControl<string>;
}>;

export type JobForm = FormGroup<{
  department: FormControl<string>;
  designation: FormControl<string>;
  joiningDate: FormControl<Date | null>;
  employmentType: FormControl<EmploymentType>;
  contractEndDate: FormControl<Date | null>;
  shiftStart: FormControl<string>;
  shiftEnd: FormControl<string>;
  skills: FormControl<string[]>;
  salary: FormControl<number | null>;
}>;

export type DocumentForm = FormGroup<{
  type: FormControl<DocumentType | null>;
  number: FormControl<string>;
  expiryDate: FormControl<Date | null>;
  fileName: FormControl<string | null>;
}>;

export type OtherForm = FormGroup<{
  documents: FormArray<DocumentForm>;
  active: FormControl<boolean>;
  notes: FormControl<string>;
  confirmed: FormControl<boolean>;
}>;

export type EmployeeForm = FormGroup<{
  personal: PersonalForm;
  job: JobForm;
  other: OtherForm;
}>;

/** `nationalities` feeds the "pick from the list" check once the lookup has loaded. */
export function createEmployeeForm(
  fb: NonNullableFormBuilder,
  nationalities: () => readonly string[],
): EmployeeForm {
  const nameValidators = [Validators.required, lettersOnly, Validators.maxLength(50)];
  return fb.group({
    personal: fb.group({
      photoUrl: fb.control<string | null>(null),
      firstName: fb.control('', nameValidators),
      lastName: fb.control('', nameValidators),
      email: fb.control('', [Validators.required, Validators.email]),
      countryCode: fb.control('+971', Validators.required),
      mobile: fb.control('', [Validators.required, mobileDigits]),
      dateOfBirth: fb.control<Date | null>(null, [
        Validators.required,
        notFutureDate,
        minimumAge(18),
      ]),
      gender: fb.control<Gender | null>(null, Validators.required),
      nationality: fb.control('', [Validators.required, oneOf(nationalities)]),
    }),
    job: fb.group({
      department: fb.control('', Validators.required),
      designation: fb.control({ value: '', disabled: true }, Validators.required),
      joiningDate: fb.control<Date | null>(null, Validators.required),
      employmentType: fb.control<EmploymentType>('Full-time', Validators.required),
      contractEndDate: fb.control<Date | null>({ value: null, disabled: true }, [
        Validators.required,
        dateAfter('joiningDate'),
      ]),
      shiftStart: fb.control('09:00'),
      shiftEnd: fb.control('17:00', timeAfter('shiftStart')),
      skills: fb.control<string[]>([]),
      salary: fb.control<number | null>(null, [
        Validators.required,
        positiveAmount,
        Validators.max(1_000_000),
      ]),
    }),
    other: fb.group({
      documents: fb.array<DocumentForm>([], uniqueDocumentTypes),
      active: fb.control(true),
      notes: fb.control('', Validators.maxLength(NOTES_MAX_LENGTH)),
      confirmed: fb.control(false, Validators.requiredTrue),
    }),
  });
}

export function createDocumentForm(
  fb: NonNullableFormBuilder,
  document?: EmployeeDocument,
): DocumentForm {
  return fb.group({
    type: fb.control<DocumentType | null>(document?.type ?? null, Validators.required),
    number: fb.control(document?.number ?? '', [
      Validators.required,
      Validators.pattern(DOCUMENT_NUMBER),
    ]),
    expiryDate: fb.control<Date | null>(
      document ? fromIsoDate(document.expiryDate) : null,
      Validators.required,
    ),
    fileName: fb.control<string | null>(document?.fileName ?? null),
  });
}

/**
 * Loads an employee into the form without firing valueChanges (so the department change doesn't
 * wipe the designation), then enables the controls that depend on the loaded values.
 */
export function patchEmployeeForm(
  form: EmployeeForm,
  fb: NonNullableFormBuilder,
  employee: Employee,
): void {
  const documents = form.controls.other.controls.documents;
  documents.clear({ emitEvent: false });
  employee.documents.forEach((doc) =>
    documents.push(createDocumentForm(fb, doc), { emitEvent: false }),
  );
  form.patchValue(
    {
      personal: {
        photoUrl: employee.photoUrl,
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        countryCode: employee.countryCode,
        mobile: employee.mobile,
        dateOfBirth: fromIsoDate(employee.dateOfBirth),
        gender: employee.gender,
        nationality: employee.nationality,
      },
      job: {
        department: employee.department,
        designation: employee.designation,
        joiningDate: fromIsoDate(employee.joiningDate),
        employmentType: employee.employmentType,
        contractEndDate: employee.contractEndDate ? fromIsoDate(employee.contractEndDate) : null,
        shiftStart: employee.shiftStart,
        shiftEnd: employee.shiftEnd,
        skills: [...employee.skills],
        salary: employee.salary,
      },
      other: {
        active: employee.status !== 'Inactive',
        notes: employee.notes,
        confirmed: false,
      },
    },
    { emitEvent: false },
  );
  syncDependentControls(form.controls.job);
}

/** Designation needs a department; contract end date only applies to contracts. */
export function syncDependentControls(job: JobForm): void {
  const { department, designation, employmentType, contractEndDate } = job.controls;
  if (department.value) {
    designation.enable({ emitEvent: false });
  } else {
    designation.disable({ emitEvent: false });
  }
  if (employmentType.value === 'Contract') {
    contractEndDate.enable({ emitEvent: false });
  } else {
    contractEndDate.setValue(null, { emitEvent: false });
    contractEndDate.disable({ emitEvent: false });
  }
}

/** Local calendar date as ISO yyyy-MM-dd (toISOString would shift it by the UTC offset). */
export function toIsoDate(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function fromIsoDate(iso: string): Date {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, month - 1, day);
}
