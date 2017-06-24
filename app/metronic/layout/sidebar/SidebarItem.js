import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import classNames from 'classnames';

const createSubMenu = sub =>
  sub.map(item => 
    <li className="nav-item">
      <MenuItem 
        title={item.title} 
        icon={item.icon}
        url={item.url}
      />
    </li>
  );

const SidebarItem = ({title, icon, url, open, active, sub}) => {
  const className = classNames({
    'nav-link': true,
    'open': open,
    'active': active
  });
  
  return <li className={className}>
    <MenuItem title={title} icon={icon} url={url}/>

    <ul className="sub-menu">
      {createSubMenu(sub)}
    </ul>
  </li>
};

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  open: PropTypes.bool,
  active: PropTypes.bool,
  sub: PropTypes.array,
};

SidebarItem.defaultProps = {
  sub: [],
};


export default SidebarItem;