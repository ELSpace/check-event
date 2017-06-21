import React from 'react';

const Logo = ({logo}) => (
  <div className="page-logo">
    <a href="/">
      <img src={logo} alt="logo" className="logo-default" /> </a>
    <div className="menu-toggler sidebar-toggler">
    </div>
  </div>
);

export default Logo;