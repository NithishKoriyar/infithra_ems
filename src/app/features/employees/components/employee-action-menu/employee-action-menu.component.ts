import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

/** ⋮ button with View / Edit / Delete. Its clicks never reach a clickable row or card. */
@Component({
  selector: 'app-employee-action-menu',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatMenuModule],
  template: `
    <button
      mat-icon-button
      class="icon-btn-sm trigger"
      type="button"
      [attr.aria-label]="'Actions for ' + name()"
      [matMenuTriggerFor]="menu"
      (click)="$event.stopPropagation()"
      (keydown.enter)="$event.stopPropagation()"
      (keydown.space)="$event.stopPropagation()"
    >
      <mat-icon>more_vert</mat-icon>
    </button>

    <mat-menu #menu="matMenu" xPosition="before">
      <button mat-menu-item type="button" (click)="view.emit()">
        <mat-icon>visibility</mat-icon>
        <span>View</span>
      </button>
      <button mat-menu-item type="button" (click)="edit.emit()">
        <mat-icon>edit</mat-icon>
        <span>Edit</span>
      </button>
      <mat-divider />
      <button mat-menu-item type="button" class="menu-item-danger" (click)="delete.emit()">
        <mat-icon>delete</mat-icon>
        <span>Delete</span>
      </button>
    </mat-menu>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    .trigger {
      color: var(--muted);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeActionMenuComponent {
  /** Employee's full name, used in the trigger's accessible label. */
  readonly name = input.required<string>();

  readonly view = output<void>();
  readonly edit = output<void>();
  readonly delete = output<void>();
}
