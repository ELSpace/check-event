import React from 'react';
import PropTypes from 'prop-types';

const Header = ({src}) => 
  <div>
    <img src={src} className="center-block img-responsive" width="100" alt />
  </div>;

Header.propTypes = {
  src: PropTypes.string.isRequired
};

export default Header;