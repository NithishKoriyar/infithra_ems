import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/** Centered icon, title and message. Project an action button as content. */
@Component({
  selector: 'app-empty-state',
  imports: [MatIconModule],
  template: `
    <span class="icon-circle" aria-hidden="true">
      <mat-icon class="icon-24">{{ icon() }}</mat-icon>
    </span>
    <h2 class="title">{{ title() }}</h2>
    <p class="message">{{ message() }}</p>
    <ng-content />
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 72px 24px;
      text-align: center;
    }

    .icon-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      margin-bottom: 8px;
      border-radius: var(--radius-full);
      background: var(--hover);
      color: var(--muted);
    }

    .title {
      margin: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
    }

    .message {
      max-width: 420px;
      margin: 0 0 12px;
      color: var(--muted);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly message = input('');
}
