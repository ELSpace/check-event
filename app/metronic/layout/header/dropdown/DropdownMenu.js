import React from 'react';

const DropdownMenu = ({icon, badge, title, children}) => (
  <li className="dropdown dropdown-extended dropdown-notification" >
    <a 
      className="dropdown-toggle" 
      data-toggle="dropdown" 
      data-hover="dropdown" 
      data-close-others="true"
    >
      <i className={icon} />
      <span className="badge badge-default"> {badge} </span>
    </a>
    
    <ul className="dropdown-menu">
      <li className="external">
        <h3><span className="bold">{title}</span></h3>
      </li>
      {children}
    </ul>
  </li>
);

export default DropdownMenu;