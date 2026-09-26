import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [MatButtonModule, RouterLink],
  template: `
    <header class="page-header">
      <div>
        <h1 class="page-title">Page not found</h1>
        <p class="page-subtitle">The page you're looking for doesn't exist or has moved.</p>
      </div>
    </header>
    <a mat-stroked-button class="back" routerLink="/employees">Go to Employees</a>
  `,
  styles: `
    .back {
      margin-top: 24px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
