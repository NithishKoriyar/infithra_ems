import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

export type NotificationType = 'success' | 'error';

export interface NotificationToastData {
  message: string;
  type: NotificationType;
}

/** Snack-bar body rendered by NotificationService: status icon, message and a dismiss button. */
@Component({
  selector: 'app-notification-toast',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <mat-icon class="toast-icon" [class.toast-icon--error]="data.type === 'error'">
      {{ data.type === 'success' ? 'check_circle' : 'error' }}
    </mat-icon>
    <span class="toast-message">{{ data.message }}</span>
    <button
      mat-icon-button
      class="icon-btn-sm toast-close"
      type="button"
      aria-label="Dismiss notification"
      (click)="snackBarRef.dismiss()"
    >
      <mat-icon class="icon-18">close</mat-icon>
    </button>
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      gap: 10px;
      min-height: 44px;
      padding: 6px 6px 6px 12px;
    }

    .toast-icon {
      flex: none;
      color: var(--badge-green-fg);
    }

    .toast-icon--error {
      color: var(--danger-text);
    }

    .toast-message {
      flex: 1;
      min-width: 0;
    }

    .toast-close {
      flex: none;
      margin-left: auto;
      color: var(--muted);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationToastComponent {
  protected readonly data = inject<NotificationToastData>(MAT_SNACK_BAR_DATA);
  protected readonly snackBarRef =
    inject<MatSnackBarRef<NotificationToastComponent>>(MatSnackBarRef);
}
