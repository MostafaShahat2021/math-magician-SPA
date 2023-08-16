import { render, fireEvent } from '@testing-library/react';
import BtnContainer from '../components/BtnContainer';

it('should renders all buttons', () => {
  let btnClick = '';
  const handelClick = (e) => {
    btnClick = e.target.value;
  };

  const btnContainerElement = render(<BtnContainer handelClick={handelClick} />);
  fireEvent.click(btnContainerElement.getByText('AC'));
  const allClearBtn = btnClick;
  fireEvent.click(btnContainerElement.getByText('3'));
  const Num3Btn = btnClick;
  expect(btnContainerElement).toMatchSnapshot();
  expect(allClearBtn).toBe('AC');
  expect(Num3Btn).toBe('3');
});
