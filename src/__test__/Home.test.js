import { render } from '@testing-library/react';
import Home from '../components/Home';

it('Home component should render', () => {
  const home = render(<Home />);
  expect(home).toMatchSnapshot();
});
