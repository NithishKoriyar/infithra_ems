import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CURRENT_USER } from '../current-user';
import { LogoComponent } from '../logo/logo.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

interface NavItem {
  readonly label: string;
  readonly icon: string;
  readonly path: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [
    LogoComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
    UserMenuComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  /** Shown when the sidebar is an overlay drawer (mobile). */
  readonly showClose = input(false);
  readonly closeSidebar = output<void>();

  protected readonly user = CURRENT_USER;
  protected readonly navItems: readonly NavItem[] = [
    { label: 'Dashboard', icon: 'space_dashboard', path: '/dashboard' },
    { label: 'Employees', icon: 'group', path: '/employees' },
    { label: 'Settings', icon: 'settings', path: '/settings' },
  ];
}
