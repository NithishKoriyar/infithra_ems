import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  NotificationToastComponent,
  NotificationToastData,
  NotificationType,
} from '../../shared/components/notification-toast/notification-toast.component';

export const NOTIFICATION_DURATION_MS = 4000;

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly snackBar = inject(MatSnackBar);

  success(message: string): void {
    this.open(message, 'success');
  }

  error(message: string): void {
    this.open(message, 'error');
  }

  private open(message: string, type: NotificationType): void {
    this.snackBar.openFromComponent<NotificationToastComponent, NotificationToastData>(
      NotificationToastComponent,
      {
        data: { message, type },
        duration: NOTIFICATION_DURATION_MS,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        panelClass: ['app-toast', `app-toast--${type}`],
        politeness: type === 'error' ? 'assertive' : 'polite',
      },
    );
  }
}
