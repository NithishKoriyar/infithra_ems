import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { EmployeeStatus } from '../../models/employee.model';

const TONES: Record<EmployeeStatus, string> = {
  Active: 'badge--green',
  Probation: 'badge--orange',
  Inactive: 'badge--grey',
};

@Component({
  selector: 'app-employee-status-badge',
  template: `<span class="badge" [class]="tone()">{{ status() }}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeStatusBadgeComponent {
  readonly status = input.required<EmployeeStatus>();

  protected readonly tone = computed(() => TONES[this.status()]);
}
