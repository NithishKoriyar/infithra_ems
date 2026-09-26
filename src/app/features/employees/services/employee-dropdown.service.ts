import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, shareReplay } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { DocumentType } from '../models/employee.model';
import { CountryCode, Department, Designation, Nationality } from '../models/lookup.model';
import { rethrowReadable } from './http-error';

/**
 * Lookup lists for the employee form. Each list is requested once on first use and then served
 * from cache; a failed request isn't cached, so the next subscriber retries.
 */
@Injectable({ providedIn: 'root' })
export class EmployeeDropdownService {
  private readonly http = inject(HttpClient);

  private readonly departments$ = this.lookup<Department[]>('departments', 'load departments');
  private readonly designations$ = this.lookup<Designation[]>('designations', 'load designations');
  private readonly nationalities$ = this.lookup<Nationality[]>(
    'nationalities',
    'load nationalities',
  );
  private readonly skills$ = this.lookup<string[]>('skills', 'load skills');
  private readonly documentTypes$ = this.lookup<DocumentType[]>(
    'documentTypes',
    'load document types',
  );
  private readonly countryCodes$ = this.lookup<CountryCode[]>('countryCodes', 'load country codes');

  getDepartments(): Observable<Department[]> {
    return this.departments$;
  }

  /** Designations for one department, filtered from the cached full list. */
  getDesignations(departmentId: number): Observable<Designation[]> {
    return this.designations$.pipe(
      map((designations) =>
        designations.filter((designation) => designation.departmentId === departmentId),
      ),
    );
  }

  getNationalities(): Observable<Nationality[]> {
    return this.nationalities$;
  }

  getSkills(): Observable<string[]> {
    return this.skills$;
  }

  getDocumentTypes(): Observable<DocumentType[]> {
    return this.documentTypes$;
  }

  getCountryCodes(): Observable<CountryCode[]> {
    return this.countryCodes$;
  }

  private lookup<T>(path: string, action: string): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}/${path}`).pipe(
      catchError(rethrowReadable(action)),
      // shareReplay resets on error, so only successful responses are cached.
      shareReplay(1),
    );
  }
}
