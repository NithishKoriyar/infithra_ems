import { TestBed } from '@angular/core/testing';

import { EmployeeStatus } from '../../models/employee.model';
import { EmployeeStatusBadgeComponent } from './employee-status-badge.component';

describe('EmployeeStatusBadgeComponent', () => {
  async function render(status: EmployeeStatus): Promise<HTMLElement> {
    const fixture = TestBed.createComponent(EmployeeStatusBadgeComponent);
    fixture.componentRef.setInput('status', status);
    await fixture.whenStable();
    const badge = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.badge');
    if (!badge) {
      throw new Error('badge not rendered');
    }
    return badge;
  }

  it.each([
    ['Active', 'badge--green'],
    ['Probation', 'badge--orange'],
    ['Inactive', 'badge--grey'],
  ] as const)('shows %s as a %s pill', async (status, tone) => {
    const badge = await render(status);

    expect(badge.textContent?.trim()).toBe(status);
    expect(badge.classList).toContain('badge');
    expect(badge.classList).toContain(tone);
  });

  it('updates the tone when the status changes', async () => {
    const fixture = TestBed.createComponent(EmployeeStatusBadgeComponent);
    fixture.componentRef.setInput('status', 'Probation');
    await fixture.whenStable();

    fixture.componentRef.setInput('status', 'Active');
    await fixture.whenStable();

    const badge = (fixture.nativeElement as HTMLElement).querySelector('.badge');
    expect(badge?.classList).toContain('badge--green');
    expect(badge?.classList).not.toContain('badge--orange');
  });
});
