import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    });
  });

  it('renders a router outlet', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).querySelector('router-outlet')).not.toBeNull();
  });
});
