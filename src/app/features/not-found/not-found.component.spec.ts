import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('renders the title and a link back to employees', async () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    await fixture.whenStable();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('h1')?.textContent?.trim()).toBe('Page not found');
    expect(host.querySelector('a')?.getAttribute('href')).toBe('/employees');
  });
});
