import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from '../../app.routes';

/** Renders the real app routes (shell included) and reads the breadcrumb from the top bar. */
async function breadcrumbAt(url: string): Promise<HTMLElement> {
  const harness = await RouterTestingHarness.create(url);
  await harness.fixture.whenStable();
  const breadcrumb = (harness.fixture.nativeElement as HTMLElement).querySelector<HTMLElement>(
    'app-breadcrumb',
  );
  if (!breadcrumb) {
    throw new Error('app-breadcrumb not rendered');
  }
  return breadcrumb;
}

function labels(breadcrumb: HTMLElement): string[] {
  return Array.from(breadcrumb.querySelectorAll('.crumb-link, .crumb-current')).map(
    (crumb) => crumb.textContent?.trim() ?? '',
  );
}

describe('BreadcrumbComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes, withComponentInputBinding())],
    });
  });

  it('shows Home › Employees › Add Employee on /employees/new', async () => {
    const breadcrumb = await breadcrumbAt('/employees/new');

    expect(labels(breadcrumb)).toEqual(['Home', 'Employees', 'Add Employee']);
    expect(breadcrumb.querySelectorAll('.crumb-separator')).toHaveLength(2);
  });

  it('links earlier crumbs and marks the last one as the current page', async () => {
    const breadcrumb = await breadcrumbAt('/employees/new');

    const links = Array.from(breadcrumb.querySelectorAll('a'));
    expect(links.map((link) => link.getAttribute('href'))).toEqual(['/', '/employees']);

    const current = breadcrumb.querySelector('.crumb-current');
    expect(current?.tagName).toBe('SPAN');
    expect(current?.getAttribute('aria-current')).toBe('page');
  });

  it('shows the list crumb as current on /employees', async () => {
    const breadcrumb = await breadcrumbAt('/employees');

    expect(labels(breadcrumb)).toEqual(['Home', 'Employees']);
  });

  it('uses the label set at runtime by the details page', async () => {
    const breadcrumb = await breadcrumbAt('/employees/42');

    expect(labels(breadcrumb)).toEqual(['Home', 'Employees', 'Employee 42']);
  });

  it('shows Edit Employee on the edit route', async () => {
    const breadcrumb = await breadcrumbAt('/employees/42/edit');

    expect(labels(breadcrumb)).toEqual(['Home', 'Employees', 'Edit Employee']);
  });
});
