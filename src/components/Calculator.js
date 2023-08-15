import { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import Display from './Display';
import BtnContainer from './BtnContainer';

const calculateObj = {
  total: null,
  next: null,
  operation: null,
};

function CalcContainer() {
  const [res, setRes] = useState('0');
  const handelClick = (e) => {
    const { total = null, next = null, operation = null } = calculate(calculateObj, e.target.value);
    calculateObj.total = total;
    calculateObj.next = next;
    calculateObj.operation = operation;
    if (calculateObj.total || calculateObj.next) {
      setRes(calculateObj.next ? calculateObj.next : calculateObj.total);
    } else {
      setRes('0');
    }
  };
  return (
    <div className="container">
      <div className="cont">
        <h5>Let&apos;s do some math!</h5>
      </div>
      <div className="calcContainer">
        <Display result={res} />
        <BtnContainer handelClick={handelClick} />
      </div>
    </div>
  );
}

export default CalcContainer;
