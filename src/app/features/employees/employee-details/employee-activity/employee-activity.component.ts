import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { ActivityEvent, ActivityType } from '../../models/employee.model';

const ICONS: Record<ActivityType, string> = {
  joined: 'person_add',
  documents: 'upload_file',
  probation: 'verified',
  salary: 'payments',
  updated: 'edit',
};

@Component({
  selector: 'app-employee-activity',
  imports: [DatePipe, EmptyStateComponent, MatIconModule],
  templateUrl: './employee-activity.component.html',
  styleUrl: './employee-activity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeActivityComponent {
  readonly events = input.required<ActivityEvent[]>();

  protected readonly icons = ICONS;
  /** Newest first; stable for events on the same day. */
  protected readonly timeline = computed(() =>
    this.events()
      .map((event, index) => ({ event, index }))
      .sort((a, b) => b.event.date.localeCompare(a.event.date) || b.index - a.index)
      .map(({ event }) => event),
  );
}
