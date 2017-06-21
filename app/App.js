import React, { Component } from 'react';
import { observer, inject, action } from 'mobx-react';

@inject('store')
@observer
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.store.x}</h1>
        <button onClick={this.props.store.incr}>INCR</button>
      </div>
    )
  }

}
