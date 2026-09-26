import { OverlayContainer } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ThemeService } from '../../core/services/theme.service';
import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let fixture: ComponentFixture<TopBarComponent>;
  let host: HTMLElement;

  const button = (label: RegExp): HTMLButtonElement => {
    const match = Array.from(host.querySelectorAll('button')).find((el) =>
      label.test(el.getAttribute('aria-label') ?? ''),
    );
    if (!match) {
      throw new Error(`No button labelled ${label}`);
    }
    return match;
  };

  beforeEach(async () => {
    localStorage.clear();
    document.documentElement.classList.remove('light');
    TestBed.configureTestingModule({ providers: [provideRouter([])] });

    fixture = TestBed.createComponent(TopBarComponent);
    fixture.componentRef.setInput('sidebarOpen', true);
    fixture.componentRef.setInput('isMobile', false);
    host = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('light');
  });

  it('shows the sidebar toggle with its expanded state', async () => {
    const toggle = button(/collapse sidebar/i);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');

    fixture.componentRef.setInput('sidebarOpen', false);
    await fixture.whenStable();

    expect(button(/expand sidebar/i).getAttribute('aria-expanded')).toBe('false');
  });

  it('emits toggleSidebar when the toggle is clicked', () => {
    let emitted = 0;
    fixture.componentInstance.toggleSidebar.subscribe(() => emitted++);

    button(/collapse sidebar/i).click();

    expect(emitted).toBe(1);
  });

  it('swaps the breadcrumb for the menu button and logo on mobile', async () => {
    expect(host.querySelector('app-breadcrumb')).not.toBeNull();

    fixture.componentRef.setInput('isMobile', true);
    await fixture.whenStable();

    expect(host.querySelector('app-breadcrumb')).toBeNull();
    expect(host.querySelector('app-logo')).not.toBeNull();
    expect(button(/open navigation/i)).toBeTruthy();
  });

  it('toggles the theme', async () => {
    button(/switch to light theme/i).click();
    await fixture.whenStable();

    expect(TestBed.inject(ThemeService).theme()).toBe('light');
    expect(button(/switch to dark theme/i).textContent?.trim()).toBe('dark_mode');
  });

  it('shows 3 unread notifications and clears them with "Mark all as read"', async () => {
    const bell = button(/notifications/i);
    expect(bell.getAttribute('aria-label')).toBe('Notifications, 3 unread');
    expect(host.querySelector('.mat-badge-content')?.textContent?.trim()).toBe('3');

    bell.click();
    await fixture.whenStable();
    const overlay = TestBed.inject(OverlayContainer).getContainerElement();
    expect(overlay.querySelectorAll('.notification')).toHaveLength(5);
    expect(overlay.querySelectorAll('.unread-dot')).toHaveLength(3);

    overlay.querySelector<HTMLButtonElement>('.mark-all')?.click();
    await fixture.whenStable();

    expect(overlay.querySelectorAll('.unread-dot')).toHaveLength(0);
    expect(bell.getAttribute('aria-label')).toBe('Notifications');
    expect(bell.classList).toContain('mat-badge-hidden');
  });
});
