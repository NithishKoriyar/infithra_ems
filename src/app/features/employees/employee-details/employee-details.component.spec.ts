import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BreadcrumbService } from '../../../core/services/breadcrumb.service';
import { EmployeeDetailsComponent } from './employee-details.component';

describe('EmployeeDetailsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('renders the id and sets it as the breadcrumb label', async () => {
    const setLabel = vi.spyOn(TestBed.inject(BreadcrumbService), 'setLabel');
    const fixture = TestBed.createComponent(EmployeeDetailsComponent);
    fixture.componentRef.setInput('id', '7');
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('h1')?.textContent?.trim()).toBe('Employee 7');
    expect(setLabel).toHaveBeenCalledWith('Employee 7');
  });
});
