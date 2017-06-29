import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({text, color, uppercase}) => {

  const className = classNames({
    "btn": true,
    "uppercase": uppercase  
  }, [color]);

  return <button className={className}>{text}</button>
};

Button.propTypes = {
  color: PropTypes.string,
  uppercase: PropTypes.bool,
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  color: 'green',
  uppercase: false
};

export default Button;