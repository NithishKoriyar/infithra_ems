import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, inject, linkedSignal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

/** Below 1024px the sidebar becomes an overlay drawer. Keep in sync with the SCSS breakpoints. */
export const MOBILE_QUERY = '(max-width: 1023.98px)';

@Component({
  selector: 'app-shell',
  imports: [MatSidenavModule, RouterOutlet, SidebarComponent, TopBarComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);

  protected readonly isMobile = toSignal(
    this.breakpointObserver.observe(MOBILE_QUERY).pipe(map((state) => state.matches)),
    { initialValue: this.breakpointObserver.isMatched(MOBILE_QUERY) },
  );

  /** Open by default on desktop and closed on mobile; resets whenever the breakpoint flips. */
  protected readonly sidebarOpen = linkedSignal(() => !this.isMobile());

  constructor() {
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        if (this.isMobile()) {
          this.sidebarOpen.set(false);
        }
      });
  }

  protected toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }
}
