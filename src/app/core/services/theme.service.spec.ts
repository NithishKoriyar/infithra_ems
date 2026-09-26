import { TestBed } from '@angular/core/testing';
import { THEME_STORAGE_KEY, ThemeService } from './theme.service';

describe('ThemeService', () => {
  const root = document.documentElement;

  beforeEach(() => {
    localStorage.clear();
    root.classList.remove('light');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
    root.classList.remove('light');
  });

  it('defaults to dark with no light class', () => {
    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('dark');
    expect(service.isDark()).toBe(true);
    expect(root.classList.contains('light')).toBe(false);
  });

  it('toggles to light, adds the class and persists the choice', () => {
    const service = TestBed.inject(ThemeService);

    service.toggle();

    expect(service.theme()).toBe('light');
    expect(root.classList.contains('light')).toBe(true);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
  });

  it('toggles back to dark and removes the class', () => {
    const service = TestBed.inject(ThemeService);

    service.toggle();
    service.toggle();

    expect(service.theme()).toBe('dark');
    expect(root.classList.contains('light')).toBe(false);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  it('restores a saved light theme', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');

    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('light');
    expect(root.classList.contains('light')).toBe(true);
  });

  it('ignores unknown stored values', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'sepia');

    expect(TestBed.inject(ThemeService).theme()).toBe('dark');
  });

  it('still works when storage throws', () => {
    const storageProto = Object.getPrototypeOf(localStorage) as Storage;
    vi.spyOn(storageProto, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(storageProto, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });

    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('dark');

    service.toggle();
    expect(service.theme()).toBe('light');
    expect(root.classList.contains('light')).toBe(true);
  });
});
