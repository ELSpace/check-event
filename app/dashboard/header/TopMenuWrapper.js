import React from 'react';

const TopMenuWrapper = ({children}) => (
  <div className="top-menu">
    <ul className="nav navbar-nav pull-right">
      {children}
    </ul>
  </div>
);

export default TopMenuWrapper;