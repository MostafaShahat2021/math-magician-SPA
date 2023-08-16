import calculate from './calculate';

it('3 + 3 = 6', () => {
  const object = {
    total: 3,
    next: 3,
    operation: '+',
  };
  const result = calculate(object, '=');
  expect(result.total).toBe('6');
});

it('3 x 3 = 9', () => {
  const object = {
    total: 3,
    next: 3,
    operation: 'x',
  };
  const result = calculate(object, '=');
  expect(result.total).toBe('9');
});

it('3 % 2 = 1', () => {
  const object = {
    total: 3,
    next: 3,
    operation: '÷',
  };
  const result = calculate(object, '=');
  expect(result.total).toBe('1');
});

it('6 - 3 = 3', () => {
  const object = {
    total: 6,
    next: 3,
    operation: '-',
  };
  const result = calculate(object, '=');
  expect(result.total).toBe('3');
});
