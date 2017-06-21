import React from 'react';
import PropTypes from 'prop-types';

const ProfileItem = ({icon, title, badge, badgeColor, url, onClick}) => (
  <li>
    <a href={url} onClick={onClick}>
      <i className={icon}></i> {title}
      {badge && <span className={`badge badge-${badgeColor}`} > {badge} </span>}
    </a>
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