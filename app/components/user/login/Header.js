import React from 'react';
import PropTypes from 'prop-types';

const Header = ({src}) => 
  <div>
    <h1>Login</h1>
    <p className="text-muted">Sign In to your account</p>
  </div>;

Header.propTypes = {
  src: PropTypes.string.isRequired
};

export default Header;