import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { observer, inject } from 'mobx-react';

import profileSrc from '../../assets/img/avatars/1.jpg';

@inject('store')
@observer
class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" onClick={this.mobileSidebarToggle}>&#9776;</button>

        <a className="navbar-brand" href="#"></a>

        <ul className="nav navbar-nav d-md-down-none">
          <li className="nav-item">
            <button className="nav-link navbar-toggler sidebar-toggler" type="button" onClick={this.sidebarToggle}>&#9776;</button>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">Users</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">Settings</a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#">
              <i className="fa fa-bell"></i>
              <span className="badge badge-pill badge-danger">5</span>
            </a>
          </li>
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <button onClick={this.toggle} className="nav-link dropdown-toggle" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                <img src={profileSrc} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                <span className="d-md-down-none">
                  {
                      this.props.store.user.user &&
                      this.props.store.user.user.fullname
                  }
                </span>
              </button>

              <DropdownMenu className="dropdown-menu-right">
                <Link to="/logout">
                  <DropdownItem>
                    <i className="fa fa-lock"></i> Logout
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </Dropdown>
          </li>
          <li className="nav-item d-md-down-none">

          </li>
        </ul>
      </header>
    )
  }
}

export default Header;
