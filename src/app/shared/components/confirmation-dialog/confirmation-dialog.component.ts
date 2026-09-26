import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';

export interface ConfirmationDialogData {
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  /** Renders the confirm button red, for destructive actions. */
  danger?: boolean;
}

/** Opens the dialog and emits true only when the user confirms (Escape/backdrop count as cancel). */
export function openConfirmationDialog(
  dialog: MatDialog,
  data: ConfirmationDialogData,
): Observable<boolean> {
  return dialog
    .open<ConfirmationDialogComponent, ConfirmationDialogData, boolean>(
      ConfirmationDialogComponent,
      { data, width: '440px', maxWidth: 'calc(100vw - 32px)', restoreFocus: true },
    )
    .afterClosed()
    .pipe(map((result) => result === true));
}

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>{{ data.message }}</mat-dialog-content>
    <mat-dialog-actions>
      <!-- Cancel comes first so it gets initial focus. -->
      <button mat-stroked-button type="button" [mat-dialog-close]="false">
        {{ data.cancelText }}
      </button>
      <button
        mat-flat-button
        type="button"
        class="confirm"
        [class.btn-danger]="data.danger"
        [mat-dialog-close]="true"
      >
        {{ data.confirmText }}
      </button>
    </mat-dialog-actions>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {
  protected readonly data = inject<ConfirmationDialogData>(MAT_DIALOG_DATA);
}
