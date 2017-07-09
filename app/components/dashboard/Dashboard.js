import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Header, Sidebar, Content } from '../../metronic/layout';

// components
import Main from '../main/Main';
import Forms from '../forms/Forms';
import Settings from '../settings/Settings';
import New from '../forms/new/New';

// assets
import logo from '../../assets/img/logo.png';
import pic from '../../assets/img/avatar11.jpg';

import { routes, actions, profileItems } from '../../common'

@inject('store')
@observer
class Dashboard extends Component {
  
  componentWillMount() {
    window.$('body').attr('class', 'page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-md');
  }
  
  render() {
    return (
      <div>
        <Header logo={logo} >
          <Header.Actions actions={actions} />
          <Header.PageWrapper>
            <Header.SearchForm placeholder="Search..." />
            <Header.TopMenuWrapper>
              <Header.DropdownMenu 
                icon="fa fa-bell" 
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
          <Sidebar menu={routes}/>
          <Content>
            <Route exact path='/' component={Main} />
            <Route exact path='/forms' component={Forms}/>
            <Route path='/forms/new' component={New}/>
            <Route path='/settings' component={Settings}/>
          </Content>
        </div>
      
      </div>
    );
  }
}

export default Dashboard;