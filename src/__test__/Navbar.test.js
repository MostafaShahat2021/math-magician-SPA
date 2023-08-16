import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

it('Navbar should render', () => {
  const navElement = render(<BrowserRouter><Navbar /></BrowserRouter>);
  expect(navElement).toMatchSnapshot();
});
