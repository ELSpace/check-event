import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import Actions from './actions/Actions';
import SearchForm from './SearchForm';
import DropdownMenu from './dropdown/DropdownMenu';
import TopMenuWrapper from './TopMenuWrapper';
import PageWrapper from './PageWrapper';
import Profile from './profile/Profile';



const Header = ({children, logo}) => (
  <div className="page-header navbar navbar-fixed-top">
    <div className="page-header-inner ">
      <Logo logo={logo} />
      <a className="menu-toggler responsive-toggler" 
         data-toggle="collapse" 
         data-target=".navbar-collapse">
      </a>

      {children}       
    </div>
  </div>
);

Header.Actions = Actions;
Header.SearchForm = SearchForm;
Header.TopMenuWrapper = TopMenuWrapper;
Header.DropdownMenu = DropdownMenu;
Header.PageWrapper = PageWrapper;
Header.Profile = Profile;

Header.propTypes = {
  logo: PropTypes.string.isRequired
};

export default Header;