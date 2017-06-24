import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loading-overlay';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar'; 
import Content from './content/Content'; 
import Forms from '../forms/Forms';
import logo from '../theme/img/logo-default.png';
import pic from '../theme/img/avatar11.jpg';

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
    icon: 'icon-envelope-open',
    title: 'My Inbox',
    badge: 3,
    badgeColor: 'danger',
    url: '/'
  },
  {
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
    icon: "icon-home",
    title: "Dashboard"
  },

  {
    id: 2,
    icon: "icon-doc",
    title: "Forms"
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
            
          </Header.DropdownMenu>
          <Header.Profile name="afif" pic={pic} items={profileItems}/>
       
        </Header.TopMenuWrapper> 
      </Header.PageWrapper>    
    </Header>
    
    <div className="page-container">
    
      <Sidebar menu={menu}/>
      <Content >
        <Loadable
            active={true}
            animate
            zIndex={9}
            spinner
            text='Loading your content...'
            >
          <Content.Item title="Trololo" description="huh">
            <Route path='/forms' component={Forms}/>
          </Content.Item>
        </Loadable>
      </Content>
        
    </div>
    
  </div>  
 
);

export default Dashboard;