import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Employee, NewEmployeePayload } from '../models/employee.model';
import { EmployeeService, nextEmployeeId } from './employee.service';

const API = `${environment.apiUrl}/employees`;
const NOW = '2026-09-26T10:00:00.000Z';

function buildEmployee(overrides: Partial<Employee> = {}): Employee {
  return {
    id: 2,
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
    employmentType: 'Contract',
    contractEndDate: '2028-02-29',
    shiftStart: '09:00',
    shiftEnd: '17:00',
    skills: ['Excel', 'SAP'],
    salary: 12500,
    documents: [
      { type: 'Visa', number: 'V-55120', expiryDate: '2026-09-20', fileName: 'visa.pdf' },
    ],
    status: 'Probation',
    notes: '',
    activity: [
      {
        type: 'joined',
        title: 'Joined the company',
        description: 'Joined Finance as Accountant.',
        date: '2026-03-01',
      },
    ],
    createdAt: '2026-02-20T09:15:00.000Z',
    updatedAt: '2026-06-01T10:30:00.000Z',
    ...overrides,
  };
}

function newEmployeePayload(): NewEmployeePayload {
  const { id, employeeId, createdAt, updatedAt, ...payload } = buildEmployee();
  return payload;
}

describe('EmployeeService', () => {
  let service: EmployeeService;
  let http: HttpTestingController;

  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date(NOW));
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(EmployeeService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    vi.useRealTimers();
  });

  describe('getEmployees()', () => {
    it('GETs the collection without query params', async () => {
      const employees = [buildEmployee(), buildEmployee({ id: 3, employeeId: 'E-1002' })];

      const result = firstValueFrom(service.getEmployees());
      const req = http.expectOne({ method: 'GET', url: API });
      expect(req.request.params.keys()).toEqual([]);
      req.flush(employees);

      expect(await result).toEqual(employees);
    });

    it('rethrows a readable error when the server is unreachable', async () => {
      const result = firstValueFrom(service.getEmployees());
      http.expectOne(API).error(new ProgressEvent('error'));

      await expect(result).rejects.toThrow(
        "Couldn't load employees. The server could not be reached.",
      );
    });
  });

  describe('getEmployee()', () => {
    it('GETs one employee by id', async () => {
      const result = firstValueFrom(service.getEmployee(2));
      http.expectOne({ method: 'GET', url: `${API}/2` }).flush(buildEmployee());

      expect((await result).employeeId).toBe('E-1001');
    });

    it('reports a missing employee', async () => {
      const result = firstValueFrom(service.getEmployee(99));
      http.expectOne(`${API}/99`).flush({}, { status: 404, statusText: 'Not Found' });

      await expect(result).rejects.toThrow("Couldn't load the employee. The record was not found.");
    });
  });

  describe('addEmployee()', () => {
    it('POSTs the payload with the next employeeId and timestamps', async () => {
      const payload = newEmployeePayload();

      const result = firstValueFrom(service.addEmployee(payload));
      http
        .expectOne({ method: 'GET', url: API })
        .flush([
          buildEmployee({ employeeId: 'E-1000' }),
          buildEmployee({ employeeId: 'E-1014' }),
          buildEmployee({ employeeId: 'E-1003' }),
        ]);
      const post = http.expectOne({ method: 'POST', url: API });

      expect(post.request.body).toEqual({
        ...payload,
        employeeId: 'E-1015',
        createdAt: NOW,
        updatedAt: NOW,
      });
      expect(post.request.body).not.toHaveProperty('id');

      const created = { ...post.request.body, id: 15 };
      post.flush(created);
      expect(await result).toEqual(created);
    });

    it('starts at E-1000 when there are no employees', async () => {
      const result = firstValueFrom(service.addEmployee(newEmployeePayload()));
      http.expectOne({ method: 'GET', url: API }).flush([]);
      const post = http.expectOne({ method: 'POST', url: API });

      expect(post.request.body.employeeId).toBe('E-1000');
      post.flush({ ...post.request.body, id: 1 });
      await result;
    });

    it('does not POST when the id lookup fails', async () => {
      const result = firstValueFrom(service.addEmployee(newEmployeePayload()));
      http.expectOne({ method: 'GET', url: API }).flush({}, { status: 500, statusText: 'Error' });

      await expect(result).rejects.toThrow(
        "Couldn't add the employee. The server ran into a problem.",
      );
      http.expectNone({ method: 'POST', url: API });
    });
  });

  describe('updateEmployee()', () => {
    it('PUTs the full record, keeping createdAt and bumping updatedAt', async () => {
      const current = buildEmployee();
      const { id, createdAt, updatedAt, ...payload } = buildEmployee({ salary: 14000 });

      const result = firstValueFrom(service.updateEmployee(2, payload));
      http.expectOne({ method: 'GET', url: `${API}/2` }).flush(current);
      const put = http.expectOne({ method: 'PUT', url: `${API}/2` });

      expect(put.request.body).toEqual({
        ...payload,
        id: 2,
        createdAt: current.createdAt,
        updatedAt: NOW,
      });

      put.flush(put.request.body);
      expect((await result).salary).toBe(14000);
    });

    it('rethrows a readable error when the PUT fails', async () => {
      const { id, createdAt, updatedAt, ...payload } = buildEmployee();

      const result = firstValueFrom(service.updateEmployee(2, payload));
      http.expectOne({ method: 'GET', url: `${API}/2` }).flush(buildEmployee());
      http
        .expectOne({ method: 'PUT', url: `${API}/2` })
        .flush({}, { status: 400, statusText: 'Bad Request' });

      await expect(result).rejects.toThrow(
        "Couldn't update the employee. The server responded with 400 Bad Request.",
      );
    });
  });

  describe('deleteEmployee()', () => {
    it('DELETEs by id', async () => {
      const result = firstValueFrom(service.deleteEmployee(3));
      http.expectOne({ method: 'DELETE', url: `${API}/3` }).flush({});

      expect(await result).toBeUndefined();
    });

    it('rethrows a readable error', async () => {
      const result = firstValueFrom(service.deleteEmployee(3));
      http.expectOne(`${API}/3`).flush({}, { status: 404, statusText: 'Not Found' });

      await expect(result).rejects.toThrow("Couldn't delete the employee.");
    });
  });
});

describe('nextEmployeeId()', () => {
  it('increments the highest id, not the count', () => {
    expect(nextEmployeeId([{ employeeId: 'E-1000' }, { employeeId: 'E-1014' }])).toBe('E-1015');
  });

  it('starts at E-1000', () => {
    expect(nextEmployeeId([])).toBe('E-1000');
  });

  it('ignores ids in other formats', () => {
    expect(nextEmployeeId([{ employeeId: 'X-5000' }, { employeeId: 'E-1002' }])).toBe('E-1003');
  });
});
