import { DOCUMENT, Injectable, computed, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

/** Keep in sync with the pre-boot script in index.html. */
export const THEME_STORAGE_KEY = 'infithra-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly themeState = signal<Theme>(this.readStoredTheme());

  readonly theme = this.themeState.asReadonly();
  readonly isDark = computed(() => this.themeState() === 'dark');

  constructor() {
    this.applyTheme(this.themeState());
  }

  toggle(): void {
    this.setTheme(this.isDark() ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.themeState.set(theme);
    this.applyTheme(theme);
    try {
      this.storage()?.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Storage can be unavailable (private mode, blocked site data); the theme still applies.
    }
  }

  private applyTheme(theme: Theme): void {
    this.document.documentElement.classList.toggle('light', theme === 'light');
  }

  private readStoredTheme(): Theme {
    try {
      return this.storage()?.getItem(THEME_STORAGE_KEY) === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  }

  /** The document's own window storage (not a runtime global); the getter itself may throw. */
  private storage(): Storage | undefined {
    return this.document.defaultView?.localStorage;
  }
}
