import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { BreadcrumbService } from '../../../core/services/breadcrumb.service';
import { Employee } from '../models/employee.model';
import { EmployeeDetailsComponent } from './employee-details.component';

const EMPLOYEE: Employee = {
  id: 7,
  employeeId: 'E-1001',
  firstName: 'Sara',
  lastName: 'Ahmed',
  email: 'sara.ahmed@company.ae',
  countryCode: '+971',
  mobile: '502147789',
  dateOfBirth: '1996-07-23',
  gender: 'Female',
  nationality: 'Egypt',
  photoUrl: null,
  department: 'Finance',
  designation: 'Accountant',
  joiningDate: '2026-03-01',
  employmentType: 'Full-time',
  contractEndDate: null,
  shiftStart: '09:00',
  shiftEnd: '17:00',
  skills: [],
  salary: 12500,
  documents: [],
  status: 'Probation',
  notes: '',
  activity: [],
  createdAt: '2026-02-20T09:15:00.000Z',
  updatedAt: '2026-02-20T09:15:00.000Z',
};

describe('EmployeeDetailsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    });
  });

  it('loads the employee and sets the breadcrumb to their name', async () => {
    const setLabel = vi.spyOn(TestBed.inject(BreadcrumbService), 'setLabel');
    const fixture = TestBed.createComponent(EmployeeDetailsComponent);
    fixture.componentRef.setInput('id', '7');
    fixture.detectChanges();

    TestBed.inject(HttpTestingController)
      .expectOne(`${environment.apiUrl}/employees/7`)
      .flush(EMPLOYEE);
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('h1')?.textContent?.trim()).toBe('Sara Ahmed');
    expect(setLabel).toHaveBeenCalledWith('Sara Ahmed');
  });
});
