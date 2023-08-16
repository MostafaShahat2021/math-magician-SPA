import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('Calculator component rending test', () => {
  const CalcContainer = render(<Calculator />);
  expect(CalcContainer).toMatchSnapshot();
});
