import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({icon, title, badge, badgeColor, url, onClick}) => (
  <li>
    <Link to={url} onClick={onClick}>
      <i className={icon}></i> {title}
      {badge && <span className={`badge badge-${badgeColor}`} > {badge} </span>}
    </Link>
  </li>
);

ProfileItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  badge: PropTypes.number,
  badgeColor: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func
};

export default ProfileItem;