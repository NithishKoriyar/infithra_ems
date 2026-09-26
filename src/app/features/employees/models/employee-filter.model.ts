export type EmployeeSortField =
  'name' | 'employeeId' | 'department' | 'designation' | 'joiningDate' | 'status';

/** Matches MatSort's direction; '' means unsorted. */
export type SortDirection = 'asc' | 'desc' | '';

export interface EmployeeSort {
  field: EmployeeSortField;
  direction: SortDirection;
}

export type EmployeeListView = 'table' | 'cards';

export interface EmployeeFilter {
  search: string;
  /** Department name; null shows all departments. */
  department: string | null;
  sortField: EmployeeSortField;
  sortDirection: SortDirection;
  pageIndex: number;
  pageSize: number;
}

export const EMPLOYEE_PAGE_SIZE_OPTIONS = [5, 10, 20];

export const DEFAULT_EMPLOYEE_FILTER: EmployeeFilter = {
  search: '',
  department: null,
  sortField: 'joiningDate',
  sortDirection: 'desc',
  pageIndex: 0,
  pageSize: 5,
};

const SORT_FIELDS: readonly string[] = [
  'name',
  'employeeId',
  'department',
  'designation',
  'joiningDate',
  'status',
] satisfies EmployeeSortField[];

export function isEmployeeSortField(value: string): value is EmployeeSortField {
  return SORT_FIELDS.includes(value);
}
