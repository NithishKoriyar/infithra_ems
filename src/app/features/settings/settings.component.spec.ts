import { TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  it('renders the page title', async () => {
    const fixture = TestBed.createComponent(SettingsComponent);
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('h1')?.textContent?.trim()).toBe('Settings');
  });
});
