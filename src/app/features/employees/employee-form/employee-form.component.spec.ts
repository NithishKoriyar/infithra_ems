import { TestBed } from '@angular/core/testing';
import { EmployeeFormComponent } from './employee-form.component';

describe('EmployeeFormComponent', () => {
  it('is in add mode without an id', async () => {
    const fixture = TestBed.createComponent(EmployeeFormComponent);
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('h1')?.textContent?.trim()).toBe('Add Employee');
  });

  it('is in edit mode with an id', async () => {
    const fixture = TestBed.createComponent(EmployeeFormComponent);
    fixture.componentRef.setInput('id', '7');
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('h1')?.textContent?.trim()).toBe('Edit Employee');
  });
});
