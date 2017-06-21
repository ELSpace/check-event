import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({icon, title}) => (
  <a className="nav-link nav-toggle">
    <i className={icon} />
    <span className="title">{title}</span>
    <span className="selected"></span>
    {/* && <span className="arrow" /> */}
  </a>
);

MenuItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired
};


export default MenuItem;