import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const createSubMenu = menu =>
  menu.map(item => 
    <li className="nav-item">
      <MenuItem title={item.title} icon={item.icon}/>
    </li>
  );

const SidebarItem = ({title, icon, sub}) => (
  <li className="nav-item">
    <MenuItem title={title} icon={icon}/>

    <ul className="sub-menu">
      {createSubMenu(sub)}
    </ul>
  </li>
);

SidebarItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired  
};


export default SidebarItem;