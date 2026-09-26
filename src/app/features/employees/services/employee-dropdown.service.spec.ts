import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, firstValueFrom } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Department, Designation } from '../models/lookup.model';
import { EmployeeDropdownService } from './employee-dropdown.service';

const API = environment.apiUrl;

const DEPARTMENTS: Department[] = [
  { id: 1, name: 'Finance' },
  { id: 2, name: 'IT' },
];

const DESIGNATIONS: Designation[] = [
  { id: 1, name: 'Manager', departmentId: 1 },
  { id: 2, name: 'Accountant', departmentId: 1 },
  { id: 5, name: 'Developer', departmentId: 2 },
];

describe('EmployeeDropdownService', () => {
  let service: EmployeeDropdownService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(EmployeeDropdownService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('requests departments once and serves later calls from cache', async () => {
    const first = firstValueFrom(service.getDepartments());
    const second = firstValueFrom(service.getDepartments());
    http.expectOne({ method: 'GET', url: `${API}/departments` }).flush(DEPARTMENTS);

    expect(await first).toEqual(DEPARTMENTS);
    expect(await second).toEqual(DEPARTMENTS);

    expect(await firstValueFrom(service.getDepartments())).toEqual(DEPARTMENTS);
    http.expectNone(`${API}/departments`);
  });

  it('filters designations by department from a single cached request', async () => {
    const finance = firstValueFrom(service.getDesignations(1));
    const itDepartment = firstValueFrom(service.getDesignations(2));
    http.expectOne({ method: 'GET', url: `${API}/designations` }).flush(DESIGNATIONS);

    expect((await finance).map((d) => d.name)).toEqual(['Manager', 'Accountant']);
    expect((await itDepartment).map((d) => d.name)).toEqual(['Developer']);
    expect(await firstValueFrom(service.getDesignations(3))).toEqual([]);
    http.expectNone(`${API}/designations`);
  });

  const lookups: [string, (s: EmployeeDropdownService) => Observable<unknown>, object][] = [
    ['nationalities', (s) => s.getNationalities(), [{ code: 'AE', name: 'United Arab Emirates' }]],
    ['skills', (s) => s.getSkills(), ['Excel', 'SAP']],
    ['documentTypes', (s) => s.getDocumentTypes(), ['Visa', 'Passport']],
    ['countryCodes', (s) => s.getCountryCodes(), [{ iso: 'AE', dial: '+971' }]],
  ];

  it.each(lookups)('GETs /%s once and caches it', async (path, load, body) => {
    const first = firstValueFrom(load(service));
    http.expectOne({ method: 'GET', url: `${API}/${path}` }).flush(body);
    expect(await first).toEqual(body);

    expect(await firstValueFrom(load(service))).toEqual(body);
    http.expectNone(`${API}/${path}`);
  });

  it('rethrows a readable error and retries on the next call', async () => {
    const failed = firstValueFrom(service.getDepartments());
    http.expectOne(`${API}/departments`).error(new ProgressEvent('error'));
    await expect(failed).rejects.toThrow(
      "Couldn't load departments. The server could not be reached.",
    );

    const retried = firstValueFrom(service.getDepartments());
    http.expectOne(`${API}/departments`).flush(DEPARTMENTS);
    expect(await retried).toEqual(DEPARTMENTS);
  });
});
