import { OverlayContainer } from '@angular/cdk/overlay';
import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NotificationToastComponent } from '../../shared/components/notification-toast/notification-toast.component';
import { NOTIFICATION_DURATION_MS, NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    service = TestBed.inject(NotificationService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  afterEach(() => {
    snackBar.dismiss();
    vi.restoreAllMocks();
  });

  it('opens a success toast bottom-right for 4 seconds', () => {
    const open = vi.spyOn(snackBar, 'openFromComponent');

    service.success('Employee saved');

    expect(open).toHaveBeenCalledWith(
      NotificationToastComponent,
      expect.objectContaining({
        data: { message: 'Employee saved', type: 'success' },
        duration: NOTIFICATION_DURATION_MS,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        panelClass: ['app-toast', 'app-toast--success'],
      }),
    );
    expect(NOTIFICATION_DURATION_MS).toBe(4000);
  });

  it('opens an error toast', () => {
    const open = vi.spyOn(snackBar, 'openFromComponent');

    service.error('Could not save');

    expect(open).toHaveBeenCalledWith(
      NotificationToastComponent,
      expect.objectContaining({
        data: { message: 'Could not save', type: 'error' },
        panelClass: ['app-toast', 'app-toast--error'],
      }),
    );
  });

  it('renders the message with a check icon', async () => {
    service.success('Employee saved');
    await TestBed.inject(ApplicationRef).whenStable();

    const overlay = TestBed.inject(OverlayContainer).getContainerElement();
    expect(overlay.querySelector('.toast-message')?.textContent).toContain('Employee saved');
    expect(overlay.querySelector('.toast-icon')?.textContent?.trim()).toBe('check_circle');
  });

  it('renders an error icon for errors', async () => {
    service.error('Could not save');
    await TestBed.inject(ApplicationRef).whenStable();

    const overlay = TestBed.inject(OverlayContainer).getContainerElement();
    expect(overlay.querySelector('.toast-icon')?.textContent?.trim()).toBe('error');
  });
});
