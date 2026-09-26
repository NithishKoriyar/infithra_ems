import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, switchMap } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Employee, EmployeePayload, NewEmployeePayload } from '../models/employee.model';
import { rethrowReadable } from './http-error';

const EMPLOYEE_ID_PATTERN = /^E-(\d+)$/;
const FIRST_EMPLOYEE_NUMBER = 1000;

/** Next display id after the highest existing one, e.g. E-1014 → E-1015. Starts at E-1000. */
export function nextEmployeeId(employees: readonly Pick<Employee, 'employeeId'>[]): string {
  const numbers = employees
    .map((employee) => EMPLOYEE_ID_PATTERN.exec(employee.employeeId)?.[1])
    .filter((digits): digits is string => digits !== undefined)
    .map(Number);
  const next = numbers.length ? Math.max(...numbers) + 1 : FIRST_EMPLOYEE_NUMBER;
  return `E-${next}`;
}

/**
 * CRUD for employees against the json-server mock API.
 * Filtering, sorting and paging happen client-side in the list screen, so reads take no params.
 */
@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private readonly http = inject(HttpClient);
  private readonly url = `${environment.apiUrl}/employees`;

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url).pipe(catchError(rethrowReadable('load employees')));
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http
      .get<Employee>(`${this.url}/${id}`)
      .pipe(catchError(rethrowReadable('load the employee')));
  }

  addEmployee(payload: NewEmployeePayload): Observable<Employee> {
    return this.http.get<Employee[]>(this.url).pipe(
      switchMap((employees) => {
        const now = new Date().toISOString();
        const body = {
          ...payload,
          employeeId: nextEmployeeId(employees),
          createdAt: now,
          updatedAt: now,
        };
        return this.http.post<Employee>(this.url, body);
      }),
      catchError(rethrowReadable('add the employee')),
    );
  }

  updateEmployee(id: number, payload: EmployeePayload): Observable<Employee> {
    const url = `${this.url}/${id}`;
    // json-server's PUT replaces the whole record, so carry the original createdAt over.
    return this.http.get<Employee>(url).pipe(
      switchMap((current) => {
        const body: Employee = {
          ...payload,
          id,
          createdAt: current.createdAt,
          updatedAt: new Date().toISOString(),
        };
        return this.http.put<Employee>(url, body);
      }),
      catchError(rethrowReadable('update the employee')),
    );
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<unknown>(`${this.url}/${id}`).pipe(
      map(() => undefined),
      catchError(rethrowReadable('delete the employee')),
    );
  }
}
