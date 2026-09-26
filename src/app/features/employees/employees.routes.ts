import { Routes } from '@angular/router';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

// The 'Employees' crumb lives on the parent route in app.routes.ts so every child inherits it.
export const EMPLOYEES_ROUTES: Routes = [
  {
    path: '',
    title: 'Employees · infithra',
    component: EmployeeListComponent,
  },
  {
    path: 'new',
    title: 'Add Employee · infithra',
    data: { breadcrumb: 'Add Employee' },
    component: EmployeeFormComponent,
    canDeactivate: [unsavedChangesGuard],
  },
  {
    path: ':id',
    title: 'Employee · infithra',
    // Fallback until the page calls BreadcrumbService.setLabel() with the employee's name.
    data: { breadcrumb: 'Employee Details' },
    component: EmployeeDetailsComponent,
  },
  {
    path: ':id/edit',
    title: 'Edit Employee · infithra',
    data: { breadcrumb: 'Edit Employee' },
    component: EmployeeFormComponent,
    canDeactivate: [unsavedChangesGuard],
  },
];
