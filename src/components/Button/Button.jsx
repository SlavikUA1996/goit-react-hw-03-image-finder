import './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onloadMore }) => {
  return (
    <div onClick={onloadMore}>
      <button type="button">
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};