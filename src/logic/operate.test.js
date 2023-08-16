import operate from './operate';

it('2 + 3 = 5', () => {
  const Calcobj = {
    Frstnumber: 2,
    Scndnumber: 3,
    operation: '+',
  };
  const result = operate(
    Calcobj.Frstnumber,
    Calcobj.Scndnumber,
    Calcobj.operation,
  );
  expect(result).toBe('5');
});

it('3 - 2 = 1', () => {
  const Calcobj = {
    Frstnumber: 3,
    Scndnumber: 2,
    operation: '-',
  };
  const result = operate(
    Calcobj.Frstnumber,
    Calcobj.Scndnumber,
    Calcobj.operation,
  );
  expect(result).toBe('1');
});

it('3 x 3 = 9', () => {
  const Calcobj = {
    Frstnumber: 3,
    Scndnumber: 3,
    operation: 'x',
  };
  const result = operate(
    Calcobj.Frstnumber,
    Calcobj.Scndnumber,
    Calcobj.operation,
  );
  expect(result).toBe('9');
});

it('10 ÷ 5 = 2', () => {
  const Calcobj = {
    Frstnumber: 10,
    Scndnumber: 5,
    operation: '÷',
  };
  const result = operate(
    Calcobj.Frstnumber,
    Calcobj.Scndnumber,
    Calcobj.operation,
  );
  expect(result).toBe('2');
});

it('5 % 2 = 1', () => {
  const Calcobj = {
    Frstnumber: 5,
    Scndnumber: 2,
    operation: '%',
  };
  const result = operate(
    Calcobj.Frstnumber,
    Calcobj.Scndnumber,
    Calcobj.operation,
  );
  expect(result).toBe('1');
});
