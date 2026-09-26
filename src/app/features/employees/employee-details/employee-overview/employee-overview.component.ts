import { DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-overview',
  imports: [DatePipe, DecimalPipe, MatChipsModule, MatExpansionModule, MatIconModule],
  templateUrl: './employee-overview.component.html',
  styleUrl: './employee-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeOverviewComponent {
  readonly employee = input.required<Employee>();
}
