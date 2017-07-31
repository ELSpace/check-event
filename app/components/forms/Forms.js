import React from 'react';
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { Card, CardTitle, CardSubtitle, CardBlock } from 'reactstrap';
import Loadable from 'react-loading-overlay';

import FormsGrid from './FormsGrid'; 

@inject(({store}) => ({
  form: store.form
}))
@observer
export default class Forms extends React.Component {

  componentWillMount() {
    this.props.form.find();
  }
  
  render() {
    return (
      <div className="container-fluid">
        <FormsGrid forms={this.props.form.forms}></FormsGrid>
      </div>
    );
  }
}
