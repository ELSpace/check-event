import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react'
import Loadable from 'react-loading-overlay';
import toastr from 'toastr';


@withRouter
@inject('store')
@observer
class Logout extends React.Component {
  componentDidMount() {
    this.props.store.user.logout()
      .then(() => {
      toastr.success(` See you soon ;) `);

        this.props.history.push('/login');
      })
      .catch(() => {
        toastr.error('There was a problem logging you out');
      })
    
  }

  render() {
    return <Loadable
      active={true}
      spinner
      text={'Please John...please John please come hooowem'}
    >
      <div style={{minHeight: '100%'}}></div>;
    </Loadable>
  }
}

export default Logout;