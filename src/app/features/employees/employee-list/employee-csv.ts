import { Employee, fullName } from '../models/employee.model';

/** Byte-order mark so Excel reads the file as UTF-8 (names like "Zaabi" or "José" stay intact). */
const UTF8_BOM = String.fromCharCode(0xfeff);

const HEADERS = [
  'Employee ID',
  'Name',
  'Email',
  'Department',
  'Designation',
  'Joining Date',
  'Status',
];

/** CSV (RFC 4180, CRLF line endings) with every field quoted and a leading BOM. */
export function buildEmployeesCsv(employees: readonly Employee[]): string {
  const rows = employees.map((employee) => [
    employee.employeeId,
    fullName(employee),
    employee.email,
    employee.department,
    employee.designation,
    employee.joiningDate,
    employee.status,
  ]);
  const lines = [HEADERS, ...rows].map((fields) => fields.map(quote).join(','));
  return UTF8_BOM + lines.join('\r\n') + '\r\n';
}

export function employeesCsvFileName(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, '0');
  return `employees-${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}.csv`;
}

function quote(value: string): string {
  // Neutralise spreadsheet formulas (CSV injection) before quoting.
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${safe.replace(/"/g, '""')}"`;
}
