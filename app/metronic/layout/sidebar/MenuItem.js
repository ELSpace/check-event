import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({icon, title, url}) => (
  <Link to={url} className="nav-link nav-toggle">
    <i className={icon} />
    <span className="title">{title}</span>
    <span className="selected"></span>
    <span className="arrow" />
  </Link>
);

MenuItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};


export default MenuItem;