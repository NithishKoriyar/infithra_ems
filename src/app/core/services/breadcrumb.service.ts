import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export interface Breadcrumb {
  readonly label: string;
  readonly url: string;
}

interface RouteTrail {
  readonly path: string;
  readonly crumbs: readonly Breadcrumb[];
}

const HOME: Breadcrumb = { label: 'Home', url: '/' };

/**
 * Builds the breadcrumb trail from each route's own `data.breadcrumb` after every navigation.
 * Pages can rename their own crumb at runtime with `setLabel()` (e.g. an employee's name).
 */
@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private readonly router = inject(Router);
  private readonly trail = signal<RouteTrail>(this.readTrail());
  private readonly customLabel = signal<{ path: string; label: string } | null>(null);

  readonly breadcrumbs = computed<readonly Breadcrumb[]>(() => {
    const { path, crumbs } = this.trail();
    const custom = this.customLabel();
    const last = crumbs.at(-1);
    // A label only applies to the page that set it, so stale names never leak onto other pages.
    if (!custom || !last || custom.path !== path) {
      return [HOME, ...crumbs];
    }
    return [HOME, ...crumbs.slice(0, -1), { ...last, label: custom.label }];
  });

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.trail.set(this.readTrail()));
  }

  /** Replaces the label of the current page's (last) crumb. */
  setLabel(label: string): void {
    this.customLabel.set({ path: this.currentPath(), label });
  }

  private readTrail(): RouteTrail {
    const crumbs: Breadcrumb[] = [];
    const segments: string[] = [];
    let route: ActivatedRouteSnapshot | null = this.router.routerState.snapshot.root;

    while (route) {
      segments.push(...route.url.map((segment) => segment.path));
      // Read the route's own config so empty-path children don't repeat an inherited label.
      const label: unknown = route.routeConfig?.data?.['breadcrumb'];
      if (typeof label === 'string' && label) {
        crumbs.push({ label, url: `/${segments.join('/')}` });
      }
      route = route.firstChild;
    }

    return { path: this.currentPath(), crumbs };
  }

  private currentPath(): string {
    return this.router.url.split(/[?#]/)[0];
  }
}
