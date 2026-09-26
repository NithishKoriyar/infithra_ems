import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

import { InitialsPipe } from '../../../../shared/pipes/initials.pipe';
import { EmployeeActionMenuComponent } from '../../components/employee-action-menu/employee-action-menu.component';
import { EmployeeStatusBadgeComponent } from '../../components/employee-status-badge/employee-status-badge.component';
import { EmployeeSort, isEmployeeSortField } from '../../models/employee-filter.model';
import { Employee, fullName } from '../../models/employee.model';

@Component({
  selector: 'app-employee-table',
  imports: [
    DatePipe,
    EmployeeActionMenuComponent,
    EmployeeStatusBadgeComponent,
    InitialsPipe,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    RouterLink,
  ],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeTableComponent {
  /** The current page of employees. */
  readonly employees = input.required<readonly Employee[]>();
  readonly sort = input.required<EmployeeSort>();
  /** Total matching employees across all pages. */
  readonly total = input.required<number>();
  readonly pageIndex = input.required<number>();
  readonly pageSize = input.required<number>();
  readonly pageSizeOptions = input.required<number[]>();
  /** Simplified paginator for narrow screens. */
  readonly compact = input(false);

  readonly sortChange = output<EmployeeSort>();
  readonly pageChange = output<PageEvent>();
  readonly view = output<Employee>();
  readonly edit = output<Employee>();
  readonly delete = output<Employee>();

  protected readonly columns = [
    'name',
    'employeeId',
    'department',
    'designation',
    'joiningDate',
    'status',
    'actions',
  ];
  protected readonly fullName = fullName;
  protected readonly trackById = (_: number, employee: Employee) => employee.id;

  protected onSortChange({ active, direction }: Sort): void {
    if (isEmployeeSortField(active)) {
      this.sortChange.emit({ field: active, direction });
    }
  }

  /** Mouse convenience: the whole row opens the employee; links and buttons keep their own behaviour. */
  protected onRowClick(event: MouseEvent, employee: Employee): void {
    if (!(event.target instanceof Element) || !event.target.closest('a, button')) {
      this.view.emit(employee);
    }
  }
}
