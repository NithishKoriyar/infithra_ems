import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a class="logo" routerLink="/" aria-label="infithra home">
      <span class="logo-mark" aria-hidden="true">i</span>
      <span class="logo-word" aria-hidden="true">infithra</span>
    </a>
  `,
  styles: `
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 48px;
      padding: 0 8px;
      border-radius: var(--radius-md);
      color: var(--text);
    }

    .logo-mark {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: var(--radius-md);
      background: var(--text);
      color: var(--side);
      font-size: 15px;
      font-weight: 600;
      letter-spacing: -0.5px;
    }

    .logo-word {
      font-size: 17px;
      font-weight: 600;
      letter-spacing: -0.4px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}
