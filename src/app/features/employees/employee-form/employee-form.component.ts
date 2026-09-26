import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/** Placeholder: replaced by the add/edit form in a later step. */
@Component({
  selector: 'app-employee-form',
  template: `
    <header class="page-header">
      <div>
        <h1 class="page-title">{{ isEdit() ? 'Edit Employee' : 'Add Employee' }}</h1>
        <p class="page-subtitle">
          {{
            isEdit()
              ? 'Update personal, job and document details.'
              : 'Fill in personal, job and document details for the new team member.'
          }}
        </p>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent {
  /** Route param, bound via withComponentInputBinding(). Absent on /employees/new. */
  readonly id = input<string>();

  protected readonly isEdit = computed(() => this.id() !== undefined);
}
