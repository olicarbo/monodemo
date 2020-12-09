import addAndMultiply from '../src/index'

test('(1 + 2) * 3 = 9', () => {
    expect(addAndMultiply(1, 2, 3)).toBe(9);
  });
