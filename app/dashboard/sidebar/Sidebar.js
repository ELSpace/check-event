import React from 'react';
import SidebarItem from './SidebarItem';
import PropTypes from 'prop-types';

const createMenuItems = menu => 
  menu.map(item => 
    <SidebarItem 
      icon={item.icon} 
      title={item.title} 
      sub={item.sub}
      
    />
  );

const Sidebar = ({menu}) => ( 
 
  <div className="page-sidebar-wrapper">           
    <div className="page-sidebar navbar-collapse collapse">                   
      <ul className="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">                       
        {createMenuItems(menu)}
      </ul>
    </div>
  </div>               

)

Sidebar.propTypes = {
  menu: PropTypes.array
};

Sidebar.defaultProps = {
  menu: []
};

export default Sidebar;