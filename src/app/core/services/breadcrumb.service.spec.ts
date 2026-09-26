import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';

import { BreadcrumbService } from './breadcrumb.service';

@Component({ template: '' })
class BlankComponent {}

describe('BreadcrumbService', () => {
  let router: Router;
  let service: BreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          {
            path: 'employees',
            data: { breadcrumb: 'Employees' },
            children: [
              { path: '', component: BlankComponent },
              { path: 'new', component: BlankComponent, data: { breadcrumb: 'Add Employee' } },
              { path: ':id', component: BlankComponent, data: { breadcrumb: 'Employee Details' } },
            ],
          },
        ]),
      ],
    });
    router = TestBed.inject(Router);
    service = TestBed.inject(BreadcrumbService);
  });

  it('starts every trail with Home', async () => {
    await router.navigateByUrl('/employees');

    expect(service.breadcrumbs()).toEqual([
      { label: 'Home', url: '/' },
      { label: 'Employees', url: '/employees' },
    ]);
  });

  it('builds nested crumbs with cumulative urls', async () => {
    await router.navigateByUrl('/employees/new');

    expect(service.breadcrumbs()).toEqual([
      { label: 'Home', url: '/' },
      { label: 'Employees', url: '/employees' },
      { label: 'Add Employee', url: '/employees/new' },
    ]);
  });

  it('replaces the current crumb label with setLabel()', async () => {
    await router.navigateByUrl('/employees/7');

    service.setLabel('Sara Ahmed');

    expect(service.breadcrumbs().map((crumb) => crumb.label)).toEqual([
      'Home',
      'Employees',
      'Sara Ahmed',
    ]);
    expect(service.breadcrumbs().at(-1)?.url).toBe('/employees/7');
  });

  it('drops a custom label once the user navigates elsewhere', async () => {
    await router.navigateByUrl('/employees/7');
    service.setLabel('Sara Ahmed');

    await router.navigateByUrl('/employees/8');

    expect(service.breadcrumbs().at(-1)?.label).toBe('Employee Details');
  });
});
