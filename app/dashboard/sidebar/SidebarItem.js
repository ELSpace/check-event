import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const createSubMenu = menu =>
  menu.map(item => 
    <li className="nav-item">
      <MenuItem title={item.title} icon={item.icon}/>
    </li>
  );

const SidebarItem = ({title, icon, open, active, sub}) => {
  const className = "nav-item";   
  
  return <li className={active && open ? className + " active open" : className}>
    <MenuItem title={title} icon={icon}/>

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


export default SidebarItem;