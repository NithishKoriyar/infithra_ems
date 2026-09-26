import { ChangeDetectionStrategy, Component, inject, input, viewChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule, MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

import { NotificationService } from '../../core/services/notification.service';
import { CURRENT_USER } from '../current-user';

/**
 * Account menu shared by the sidebar user card and the header avatar.
 * Usage: `<app-user-menu #userMenu />` + `[matMenuTriggerFor]="userMenu.menu()"`.
 */
@Component({
  selector: 'app-user-menu',
  imports: [MatDividerModule, MatIconModule, MatMenuModule, RouterLink],
  template: `
    <mat-menu #menu="matMenu" [xPosition]="xPosition()" [yPosition]="yPosition()">
      @if (showIdentity()) {
        <div class="identity">
          <span class="identity-name">{{ user.name }}</span>
          <span class="identity-email">{{ user.email }}</span>
        </div>
        <mat-divider />
      }
      <a mat-menu-item routerLink="/settings">
        <mat-icon>person</mat-icon>
        <span>Profile</span>
      </a>
      <a mat-menu-item routerLink="/settings">
        <mat-icon>settings</mat-icon>
        <span>Settings</span>
      </a>
      <mat-divider />
      <button mat-menu-item type="button" (click)="logout()">
        <mat-icon>logout</mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
  `,
  styles: `
    .identity {
      display: flex;
      flex-direction: column;
      padding: 8px 10px;
    }

    .identity-name {
      font-weight: 500;
    }

    .identity-email {
      color: var(--muted);
      font-size: 12px;
      line-height: 16px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {
  private readonly notifications = inject(NotificationService);

  readonly showIdentity = input(false);
  readonly xPosition = input<MenuPositionX>('before');
  readonly yPosition = input<MenuPositionY>('below');

  readonly menu = viewChild.required<MatMenu>('menu');

  protected readonly user = CURRENT_USER;

  protected logout(): void {
    // No auth yet: acknowledge the action so the menu item isn't a dead end.
    this.notifications.success('Signed out');
  }
}
