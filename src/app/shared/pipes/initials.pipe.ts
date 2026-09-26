import { Pipe, PipeTransform } from '@angular/core';

/** "Sara Ahmed" → "SA", "Fatima Al Zaabi" → "FZ", "Priya" → "P". */
@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
  transform(name: string | null | undefined): string {
    const words = (name ?? '').trim().split(/\s+/).filter(Boolean);
    if (!words.length) {
      return '';
    }
    const first = words[0][0];
    const last = words.length > 1 ? words[words.length - 1][0] : '';
    return `${first}${last}`.toUpperCase();
  }
}
