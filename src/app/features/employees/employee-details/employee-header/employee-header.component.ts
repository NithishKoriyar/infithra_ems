import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

import { InitialsPipe } from '../../../../shared/pipes/initials.pipe';
import { EmployeeStatusBadgeComponent } from '../../components/employee-status-badge/employee-status-badge.component';
import { Employee, fullName } from '../../models/employee.model';

@Component({
  selector: 'app-employee-header',
  imports: [
    DatePipe,
    EmployeeStatusBadgeComponent,
    InitialsPipe,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    RouterLink,
  ],
  templateUrl: './employee-header.component.html',
  styleUrl: './employee-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeHeaderComponent {
  readonly employee = input.required<Employee>();

  protected readonly name = computed(() => fullName(this.employee()));

  /** Share of optional profile details that are filled in. */
  protected readonly completeness = computed(() => {
    const e = this.employee();
    const checks = [
      !!e.photoUrl,
      !!e.nationality,
      e.skills.length > 0,
      e.documents.length > 0,
      !!e.notes.trim(),
      !!e.shiftStart && !!e.shiftEnd,
      !!e.mobile,
    ];
    if (e.employmentType === 'Contract') {
      checks.push(!!e.contractEndDate);
    }
    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  });
}
