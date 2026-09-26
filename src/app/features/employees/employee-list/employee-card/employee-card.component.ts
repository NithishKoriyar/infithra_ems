import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { InitialsPipe } from '../../../../shared/pipes/initials.pipe';
import { EmployeeActionMenuComponent } from '../../components/employee-action-menu/employee-action-menu.component';
import { EmployeeStatusBadgeComponent } from '../../components/employee-status-badge/employee-status-badge.component';
import { Employee, fullName } from '../../models/employee.model';

@Component({
  selector: 'app-employee-card',
  imports: [
    DatePipe,
    EmployeeActionMenuComponent,
    EmployeeStatusBadgeComponent,
    InitialsPipe,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss',
  host: { role: 'listitem', '(click)': 'onCardClick($event)' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCardComponent {
  readonly employee = input.required<Employee>();

  readonly view = output<Employee>();
  readonly edit = output<Employee>();
  readonly delete = output<Employee>();

  protected readonly name = computed(() => fullName(this.employee()));

  /** Mouse convenience: the whole card opens the employee; links and buttons keep their own behaviour. */
  protected onCardClick(event: MouseEvent): void {
    if (!(event.target instanceof Element) || !event.target.closest('a, button')) {
      this.view.emit(this.employee());
    }
  }
}
