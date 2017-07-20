import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className={this.activeRoute("/")}>
              <NavLink 
                to={'/'} 
                className="nav-link" 
                activeClassName="active"
              >
                <i className="icon-speedometer"></i> Dashboard
              </NavLink>
            </li>            
            <li className={this.activeRoute("/forms")}>
              <NavLink 
                to={'/forms'} 
                className="nav-link" 
                activeClassName="active"
              >
                <i className="icon-doc"></i> Forms
              </NavLink>
            </li>
            <li className={this.activeRoute("/settings")}>
              <NavLink 
                to={'/settings'} 
                className="nav-link" 
                activeClassName="active"
              >
                <i className="icon-settings"></i> Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
