import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Placeholder settings page. */
@Component({
  selector: 'app-settings',
  template: `
    <header class="page-header">
      <div>
        <h1 class="page-title">Settings</h1>
        <p class="page-subtitle">Company, profile and notification preferences will appear here.</p>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
