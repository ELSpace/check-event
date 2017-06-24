import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Sidebar, Content } from '../../metronic';

// components
import Main from '../main/Main';
import Forms from '../forms/Forms';

// assets
import logo from '../../assets/img/logo.png';
import pic from '../../assets/img/avatar11.jpg';

const actions = [
  {
    id: 1,
    title: "New Post",
    icon: "icon-doc",
    url: "/"
  },
  {
    id: 2,
    title: "New Post",
    icon: "icon-doc",
    url: "/"
  }
];

const profileItems = [
  {
    id: 1,
    icon: 'icon-envelope-open',
    title: 'My Inbox',
    badge: 3,
    badgeColor: 'danger',
    url: '/'
  },
  {
    id: 2,
    icon: 'icon-key',
    title: 'Logout',
    url: '/'
  },
];

const menu = [
  {
    id: 1,
    open: true,
    active: true,
    icon: 'icon-home',
    title: 'Dashboard',
    url: '/'
  },

  {
    id: 2,
    icon: 'icon-doc',
    title: 'Forms',
    url: '/forms'
  },
]

const Dashboard = () => (
  <div>
    <Header logo={logo} >
      <Header.Actions actions={actions} />
      <Header.PageWrapper>
        <Header.SearchForm placeholder="Search..." />
        <Header.TopMenuWrapper>
          <Header.DropdownMenu 
            icon="icon-bell" 
            badge="4"
            title="You have 4 notification"
          >
          {/* TODO create drop down menu items */}
          </Header.DropdownMenu>
          <Header.Profile name="fullname" pic={pic} items={profileItems}/>       
        </Header.TopMenuWrapper> 
      </Header.PageWrapper>    
    </Header>
    
    <div className="page-container">
      <Sidebar menu={menu}/>
      <Content>
        <Route exact path='/' component={Main} />
        <Route path='/forms' component={Forms}/>
      </Content>
    </div>
    
  </div>  
 
);

export default Dashboard;