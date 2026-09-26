import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const LETTERS = /^[\p{L}\s'-]+$/u;
const MOBILE = /^\d{9,10}$/;

/** Letters, spaces, apostrophes and hyphens only. Empty values are left to `required`. */
export const lettersOnly: ValidatorFn = (control) =>
  !control.value || LETTERS.test(String(control.value)) ? null : { lettersOnly: true };

/** 9–10 digits, no spaces or dial code. */
export const mobileDigits: ValidatorFn = (control) =>
  !control.value || MOBILE.test(String(control.value)) ? null : { mobileDigits: true };

/** Amount must be greater than 0. */
export const positiveAmount: ValidatorFn = (control) => {
  const value = control.value as number | null;
  return value === null || value === undefined || value > 0 ? null : { positiveAmount: true };
};

/** Date must not be later than today. */
export const notFutureDate: ValidatorFn = (control) => {
  const date = control.value as Date | null;
  return !date || date.getTime() <= endOfToday(new Date()).getTime() ? null : { futureDate: true };
};

/** Person must be at least `years` old on `today`. */
export function minimumAge(years: number, today: () => Date = () => new Date()): ValidatorFn {
  return (control) => {
    const date = control.value as Date | null;
    if (!date) {
      return null;
    }
    const now = today();
    const cutoff = new Date(now.getFullYear() - years, now.getMonth(), now.getDate());
    return date.getTime() <= cutoff.getTime() ? null : { minimumAge: { years } };
  };
}

/**
 * Date must be after the sibling control's date. Re-run it when the sibling changes
 * (`updateValueAndValidity()`), since validators only run when their own control changes.
 */
export function dateAfter(siblingName: string): ValidatorFn {
  return (control) => {
    const date = control.value as Date | null;
    const other = control.parent?.get(siblingName)?.value as Date | null | undefined;
    return !date || !other || date.getTime() > other.getTime() ? null : { dateAfter: true };
  };
}

/** HH:mm time must be after the sibling control's time. */
export function timeAfter(siblingName: string): ValidatorFn {
  return (control) => {
    const time = control.value as string;
    const other = control.parent?.get(siblingName)?.value as string | undefined;
    return !time || !other || time > other ? null : { timeRange: true };
  };
}

/** Value must be one of the options. Passes while the options haven't loaded. */
export function oneOf(options: () => readonly string[]): ValidatorFn {
  return (control) => {
    const list = options();
    return !control.value || !list.length || list.includes(String(control.value))
      ? null
      : { oneOf: true };
  };
}

/** Rejects files whose MIME type isn't in `types`. For use on File values, not form controls. */
export function fileType(file: File, types: readonly string[]): ValidationErrors | null {
  return types.includes(file.type) ? null : { fileType: { types } };
}

/** Rejects files larger than `maxBytes`. */
export function maxFileSize(file: File, maxBytes: number): ValidationErrors | null {
  return file.size <= maxBytes ? null : { maxFileSize: { maxBytes } };
}

/** FormArray validator: each document type may appear once. */
export const uniqueDocumentTypes: ValidatorFn = (array: AbstractControl) => {
  const types = (array.value as { type: string | null }[])
    .map((row) => row.type)
    .filter((type): type is string => !!type);
  return new Set(types).size === types.length ? null : { duplicateDocumentType: true };
};

function endOfToday(now: Date): Date {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
}
