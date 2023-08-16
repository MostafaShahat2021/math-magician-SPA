import { render } from '@testing-library/react';
import Disply from '../components/Display';

it('Disply component should render', () => {
  const Display = render(<Disply />);
  expect(Display).toMatchSnapshot();
});
