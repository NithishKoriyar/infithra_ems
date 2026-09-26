import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { ThemeService } from '../../core/services/theme.service';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { CURRENT_USER } from '../current-user';
import { LogoComponent } from '../logo/logo.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

export interface AppNotification {
  readonly id: number;
  readonly icon: string;
  readonly tone: 'danger' | 'warning' | 'neutral';
  readonly text: string;
  readonly time: string;
  readonly unread: boolean;
}

// Static until a notifications API exists.
const MOCK_NOTIFICATIONS: readonly AppNotification[] = [
  {
    id: 1,
    icon: 'event_busy',
    tone: 'danger',
    text: 'Visa expiring for Sara Ahmed',
    time: '5 min ago',
    unread: true,
  },
  {
    id: 2,
    icon: 'badge',
    tone: 'warning',
    text: 'Emirates ID for Sara Ahmed expires in 20 days',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 3,
    icon: 'person_off',
    tone: 'neutral',
    text: 'Priya Nair was marked Inactive',
    time: '3 hours ago',
    unread: true,
  },
  {
    id: 4,
    icon: 'task_alt',
    tone: 'neutral',
    text: 'Omar Haddad completed probation',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 5,
    icon: 'upload_file',
    tone: 'neutral',
    text: 'Fatima Al Zaabi uploaded a new passport copy',
    time: '2 days ago',
    unread: false,
  },
];

@Component({
  selector: 'app-top-bar',
  imports: [
    BreadcrumbComponent,
    LogoComponent,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    UserMenuComponent,
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  protected readonly theme = inject(ThemeService);

  readonly sidebarOpen = input.required<boolean>();
  readonly isMobile = input.required<boolean>();
  readonly toggleSidebar = output<void>();

  protected readonly user = CURRENT_USER;
  protected readonly notifications = signal<readonly AppNotification[]>(MOCK_NOTIFICATIONS);
  protected readonly unreadCount = computed(
    () => this.notifications().filter((notification) => notification.unread).length,
  );

  protected markAllRead(event: Event): void {
    // Keep the menu open so the user sees the dots clear.
    event.stopPropagation();
    this.notifications.update((list) => list.map((item) => ({ ...item, unread: false })));
  }

  protected markRead(id: number): void {
    this.notifications.update((list) =>
      list.map((item) => (item.id === id ? { ...item, unread: false } : item)),
    );
  }
}
