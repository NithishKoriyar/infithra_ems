// Node 25+ ships its own `localStorage`/`sessionStorage` globals, which shadow jsdom's and are bare
// objects unless Node runs with --localstorage-file. Specs get a fresh in-memory Storage instead, so
// they behave like a browser on every Node version. (Replaced without reading the Node getter, which
// would print a warning.)

class MemoryStorage {
  private readonly items = new Map<string, string>();

  get length(): number {
    return this.items.size;
  }

  clear(): void {
    this.items.clear();
  }

  getItem(key: string): string | null {
    return this.items.get(key) ?? null;
  }

  key(index: number): string | null {
    return Array.from(this.items.keys())[index] ?? null;
  }

  removeItem(key: string): void {
    this.items.delete(key);
  }

  setItem(key: string, value: string): void {
    this.items.set(key, String(value));
  }
}

for (const name of ['localStorage', 'sessionStorage']) {
  Object.defineProperty(globalThis, name, {
    value: new MemoryStorage(),
    configurable: true,
    writable: true,
  });
}
