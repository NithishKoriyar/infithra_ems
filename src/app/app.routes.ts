import { Routes } from '@angular/router';

import { ShellComponent } from './layout/shell/shell.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees' },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard · infithra',
        data: { breadcrumb: 'Dashboard' },
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'employees',
        data: { breadcrumb: 'Employees' },
        loadChildren: () =>
          import('./features/employees/employees.routes').then((m) => m.EMPLOYEES_ROUTES),
      },
      {
        path: 'settings',
        title: 'Settings · infithra',
        data: { breadcrumb: 'Settings' },
        loadComponent: () =>
          import('./features/settings/settings.component').then((m) => m.SettingsComponent),
      },
      {
        path: '**',
        title: 'Page not found · infithra',
        data: { breadcrumb: 'Page not found' },
        loadComponent: () =>
          import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
      },
    ],
  },
];
