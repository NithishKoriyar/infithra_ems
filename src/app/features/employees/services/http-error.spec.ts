import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { rethrowReadable } from './http-error';

function messageFor(error: unknown): Promise<string> {
  return firstValueFrom(rethrowReadable('load employees')(error)).then(
    () => 'no error',
    (thrown: Error) => thrown.message,
  );
}

describe('rethrowReadable()', () => {
  it.each([
    [0, '', "Couldn't load employees. The server could not be reached."],
    [404, 'Not Found', "Couldn't load employees. The record was not found."],
    [503, 'Service Unavailable', "Couldn't load employees. The server ran into a problem."],
    [
      422,
      'Unprocessable Entity',
      "Couldn't load employees. The server responded with 422 Unprocessable Entity.",
    ],
  ])('maps HTTP %i to a readable message', async (status, statusText, expected) => {
    const message = await messageFor(new HttpErrorResponse({ status, statusText }));

    expect(message.startsWith(expected)).toBe(true);
  });

  it('keeps the message of non-HTTP errors', async () => {
    expect(await messageFor(new Error('Boom'))).toBe("Couldn't load employees. Boom");
  });

  it('falls back for unknown values', async () => {
    expect(await messageFor('nope')).toBe("Couldn't load employees. Something went wrong.");
  });
});
