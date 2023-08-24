import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  className, event, label,
}) => (
  <div>
    <button type={className === 'submit-button' ? 'submit' : 'button'} className={className} onClick={event}>{label}</button>
  </div>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
