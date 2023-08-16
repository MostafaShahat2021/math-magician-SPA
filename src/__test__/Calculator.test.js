import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('..', () => {
  const CalcContainer = render(<Calculator />);
  expect(CalcContainer).toMatchSnapshot();
});
