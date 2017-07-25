import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react'
import Loadable from 'react-loading-overlay';
import toastr from 'toastr';

let interval;

@withRouter
@inject('store')
@observer
class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 5
    }
  }
  componentDidMount() {
    
    interval = setInterval(() => this.setState({timeLeft: this.state.timeLeft - 1}), 1000);

    setTimeout(() => {
    this.props.store.user.logout()
      .then(() => {
      toastr.success(` See you soon ;) `);

        this.props.history.push('/login');
      })
      .catch(() => {
        toastr.error('There was a problem logging you out');
      })
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    return <Loadable
      active={true}
      spinner
      text={'Logging you out in ' + this.state.timeLeft}
    >
      <div style={{minHeight: '100%'}}></div>;
    </Loadable>
  }
}

export default Logout;