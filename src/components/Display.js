import PropTypes from 'prop-types';
import './display.css';

function Display({ result }) {
  return (
    <p className="display">{result}</p>
  );
}
Display.propTypes = {
  result: PropTypes.string.isRequired,
};
export default Display;
