import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  it('renders the page title', async () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('h1')?.textContent?.trim()).toBe('Dashboard');
  });
});
