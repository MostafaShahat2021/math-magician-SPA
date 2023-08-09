import PropTypes from 'prop-types';
import './btnContainer.css';

function BtnContainer({ handelClick }) {
  const calcFun = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <div className="btnContainer">
      {
      calcFun.map((element) => (<button type="button" key={element} value={element} onClick={handelClick}>{element}</button>))
      }
    </div>
  );
}
BtnContainer.propTypes = {
  handelClick: PropTypes.func.isRequired,
};
export default BtnContainer;
