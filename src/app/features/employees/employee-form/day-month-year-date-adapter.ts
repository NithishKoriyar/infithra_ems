import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

const DAY_MONTH_YEAR = /^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$/;

/**
 * The native adapter parses typed text with Date.parse, which reads 05/06/1995 as May 6th.
 * Dates here are typed and shown as DD/MM/YYYY, so parse them that way.
 */
@Injectable()
export class DayMonthYearDateAdapter extends NativeDateAdapter {
  override parse(value: unknown, parseFormat?: unknown): Date | null {
    if (typeof value === 'string') {
      const match = DAY_MONTH_YEAR.exec(value.trim());
      if (match) {
        const [day, month, year] = match.slice(1).map(Number);
        const date = new Date(year, month - 1, day);
        // Rejects impossible dates such as 31/02/2026 instead of rolling them over.
        return date.getMonth() === month - 1 && date.getDate() === day ? date : this.invalid();
      }
    }
    return super.parse(value, parseFormat);
  }
}
