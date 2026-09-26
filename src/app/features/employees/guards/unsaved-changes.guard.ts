import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivateFn } from '@angular/router';

import { openConfirmationDialog } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

/** Asks before leaving a page whose form has unsaved changes. */
export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) =>
  !component.hasUnsavedChanges() ||
  openConfirmationDialog(inject(MatDialog), {
    title: 'Discard changes?',
    message: 'You have unsaved changes. If you leave now, they will be lost.',
    confirmText: 'Discard',
    cancelText: 'Keep editing',
    danger: true,
  });
