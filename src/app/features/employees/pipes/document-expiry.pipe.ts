import { Pipe, PipeTransform } from '@angular/core';

export type DocumentExpiryState = 'expired' | 'expiring' | 'valid';

export interface DocumentExpiry {
  state: DocumentExpiryState;
  /** Days until expiry; negative once expired. */
  daysLeft: number;
}

export const EXPIRING_WITHIN_DAYS = 30;
const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Expired / expiring (within 30 days) / valid for an ISO expiry date.
 * `today` is optional so callers (and tests) can pin the reference date.
 */
@Pipe({ name: 'documentExpiry' })
export class DocumentExpiryPipe implements PipeTransform {
  transform(expiryDate: string, today: Date = new Date()): DocumentExpiry {
    const [year, month, day] = expiryDate.split('-').map(Number);
    const expiry = Date.UTC(year, month - 1, day);
    const start = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const daysLeft = Math.round((expiry - start) / DAY_MS);
    const state: DocumentExpiryState =
      daysLeft < 0 ? 'expired' : daysLeft <= EXPIRING_WITHIN_DAYS ? 'expiring' : 'valid';
    return { state, daysLeft };
  }
}
