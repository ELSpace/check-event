import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'
import { render } from 'react-dom';
import { Provider, observer } from 'mobx-react';
import { PrivateRoute } from './common';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch
} from 'react-router-dom';

// global store
import Store from './store';

// load project assets
import './assets';

// Importing main components
import Login from './components/user/login/Login';
import Register from './components/user/register/Register';

// import Dashboard from './components/dashboard/Dashboard';
// import Forget from './components/user/forgetpassword/Forget';
// import Logout from './components/user/logout/logout';
// import Display from './components/forms/display/Display';


const store = new Store();

@observer
class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register}/>
            {/*<Route path='/register' component={Register} />
            <Route path='/forget' component={Forget} />
            <Route path='/logout' component={Logout} /> 
            <Route path="/display/:form" component={Display}/>       
            <PrivateRoute 
              path='/' 
              component={Dashboard} 
              isAuthenticated={store.user.isLoggedIn}
              redirectTo='/login'
            />*/}
          </Switch>
        </Router>    
      </Provider>
    )
  }
}

store.user.checkAuthState()
  .then(() => {
    render(
      <App />,
      document.getElementById('root')
    );
  });

// check if HMR is enabled
if(module.hot) {
  // accept itself 
  module.hot.accept();
}