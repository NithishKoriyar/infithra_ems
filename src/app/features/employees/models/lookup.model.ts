export interface Department {
  id: number;
  name: string;
}

export interface Designation {
  id: number;
  name: string;
  departmentId: number;
}

export interface Nationality {
  /** ISO 3166-1 alpha-2, e.g. AE. */
  code: string;
  name: string;
}

export interface CountryCode {
  /** ISO 3166-1 alpha-2, e.g. AE. */
  iso: string;
  /** Dial code, e.g. +971. */
  dial: string;
}
