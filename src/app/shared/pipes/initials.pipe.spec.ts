import { InitialsPipe } from './initials.pipe';

describe('InitialsPipe', () => {
  const pipe = new InitialsPipe();

  it.each([
    ['Sara Ahmed', 'SA'],
    ['Fatima Al Zaabi', 'FZ'],
    ['priya nair', 'PN'],
    ['  Rashid   Mansoor  ', 'RM'],
    ['Priya', 'P'],
    ['', ''],
  ])('%j → %j', (name, expected) => {
    expect(pipe.transform(name)).toBe(expected);
  });

  it('handles null and undefined', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });
});
