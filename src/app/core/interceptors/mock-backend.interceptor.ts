import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Observable, defer, delay, filter, map, of, shareReplay } from 'rxjs';

import { environment } from '../../../environments/environment';

/** Seed data, copied into the build from mock-api/db.json (see angular.json assets). */
const DB_URL = 'mock-api/db.json';
/** Simulated network latency, so loading states show like they do against json-server. */
const LATENCY_MS = 400;
/** Changes survive a page reload in the same tab; a new tab starts from the seed data. */
const STORAGE_KEY = 'infithra-mock-db';

type Row = Record<string, unknown>;
type MockDb = Record<string, unknown[]>;

/**
 * In-browser stand-in for json-server, used by builds where `environment.mockBackend` is true
 * (the GitHub Pages demo can't reach a local API). Services still make normal HttpClient calls;
 * this answers them from db.json and keeps add/edit/delete in sessionStorage.
 */
@Injectable({ providedIn: 'root' })
export class MockBackend {
  private readonly window = inject(DOCUMENT).defaultView;
  private db$?: Observable<MockDb>;

  handle(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const prefix = `${environment.apiUrl}/`;
    if (!environment.mockBackend || !req.url.startsWith(prefix)) {
      return next(req);
    }
    const [collection, rawId] = req.url.slice(prefix.length).split('?')[0].split('/');
    const id = rawId === undefined ? undefined : Number(rawId);
    return this.load(next).pipe(
      delay(LATENCY_MS),
      map((db) => {
        const response = respond(db, req, collection, id);
        if (req.method !== 'GET') {
          this.save(db);
        }
        return response;
      }),
    );
  }

  private load(next: HttpHandlerFn): Observable<MockDb> {
    // shareReplay resets on error, so a failed load is retried by the next request.
    this.db$ ??= defer(() => {
      const saved = this.restore();
      return saved
        ? of(saved)
        : next(new HttpRequest('GET', DB_URL)).pipe(
            filter((event): event is HttpResponse<MockDb> => event instanceof HttpResponse),
            map((response) => response.body ?? {}),
          );
    }).pipe(shareReplay(1));
    return this.db$;
  }

  private restore(): MockDb | null {
    try {
      const saved = this.window?.sessionStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as MockDb) : null;
    } catch {
      return null;
    }
  }

  private save(db: MockDb): void {
    try {
      this.window?.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch {
      // Storage full or blocked: changes still last until the page reloads.
    }
  }
}

export const mockBackendInterceptor: HttpInterceptorFn = (req, next) =>
  inject(MockBackend).handle(req, next);

function respond(
  db: MockDb,
  req: HttpRequest<unknown>,
  collection: string,
  id: number | undefined,
): HttpResponse<unknown> {
  const rows = db[collection];
  if (!rows) {
    throw notFound(req);
  }
  if (id === undefined) {
    if (req.method === 'GET') {
      return ok(req, rows);
    }
    if (req.method === 'POST' && isRow(req.body)) {
      const created = { ...req.body, id: nextId(rows) };
      rows.push(created);
      return ok(req, created, 201);
    }
    throw notFound(req);
  }

  const index = rows.findIndex((row) => isRow(row) && row['id'] === id);
  if (index === -1) {
    throw notFound(req);
  }
  switch (req.method) {
    case 'GET':
      return ok(req, rows[index]);
    case 'PUT':
      rows[index] = { ...(isRow(req.body) ? req.body : {}), id };
      return ok(req, rows[index]);
    case 'DELETE':
      rows.splice(index, 1);
      return ok(req, {});
    default:
      throw notFound(req);
  }
}

/** Responses are copies, so callers can't change the in-memory data by accident. */
function ok(req: HttpRequest<unknown>, body: unknown, status = 200): HttpResponse<unknown> {
  return new HttpResponse({ status, body: structuredClone(body), url: req.url });
}

function notFound(req: HttpRequest<unknown>): HttpErrorResponse {
  return new HttpErrorResponse({ status: 404, statusText: 'Not Found', url: req.url });
}

function nextId(rows: unknown[]): number {
  const ids = rows.map((row) => (isRow(row) ? Number(row['id']) : 0)).filter(Number.isFinite);
  return (ids.length ? Math.max(...ids) : 0) + 1;
}

function isRow(value: unknown): value is Row {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
