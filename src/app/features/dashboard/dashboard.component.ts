import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Placeholder: the dashboard is an optional bonus for a later step. */
@Component({
  selector: 'app-dashboard',
  template: `
    <header class="page-header">
      <div>
        <h1 class="page-title">Dashboard</h1>
        <p class="page-subtitle">
          Headcount, expiring documents and recent activity will appear here.
        </p>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
