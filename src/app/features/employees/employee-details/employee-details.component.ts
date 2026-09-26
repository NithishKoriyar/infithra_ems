import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';

import { BreadcrumbService } from '../../../core/services/breadcrumb.service';

/** Placeholder: replaced by the employee details page in a later step. */
@Component({
  selector: 'app-employee-details',
  template: `
    <header class="page-header">
      <div>
        <h1 class="page-title">Employee {{ id() }}</h1>
        <p class="page-subtitle">Profile, documents and activity will appear here.</p>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsComponent {
  private readonly breadcrumbs = inject(BreadcrumbService);

  /** Route param, bound via withComponentInputBinding(). */
  readonly id = input.required<string>();

  constructor() {
    effect(() => this.breadcrumbs.setLabel(`Employee ${this.id()}`));
  }
}
