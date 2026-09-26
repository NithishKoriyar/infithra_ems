import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

/**
 * catchError handler that rethrows any failure as an Error with a sentence the UI can show as is,
 * e.g. "Couldn't load employees. The server could not be reached. …".
 */
export function rethrowReadable(action: string): (error: unknown) => Observable<never> {
  return (error) => throwError(() => new Error(`Couldn't ${action}. ${describe(error)}`));
}

function describe(error: unknown): string {
  if (!(error instanceof HttpErrorResponse)) {
    return error instanceof Error ? error.message : 'Something went wrong.';
  }
  if (error.status === 0) {
    return 'The server could not be reached. Check your connection and try again.';
  }
  if (error.status === 404) {
    return 'The record was not found. It may have been deleted.';
  }
  if (error.status >= 500) {
    return 'The server ran into a problem. Please try again.';
  }
  const status = error.statusText ? `${error.status} ${error.statusText}` : `${error.status}`;
  return `The server responded with ${status}.`;
}
