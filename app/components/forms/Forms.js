import React from 'react';
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { Card, CardTitle, CardSubtitle, CardBlock } from 'reactstrap';

import FormsTable from './FormsTable';

@inject('store')
@observer
export default class Forms extends React.Component {

  componentWillMount() {
    this.props.store.form.find();
  }
  
  render() {
    return (
      <div className="container-fluid">
        <FormsTable forms={this.props.store.form.forms}></FormsTable>
      </div>
    );
  }
}
