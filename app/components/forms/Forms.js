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
        <Card>
          <CardBlock>
            <CardTitle>My Forms</CardTitle>           
            <hr/>
            <div className="actions">
              <Link to='/forms/new'> 
                <button className='btn btn-primary'>Create Form</button> 
              </Link>
            </div>
            <br />
            <FormsTable forms={this.props.store.form.forms}></FormsTable>
          </CardBlock>
        </Card>
      </div>
    );
  }
}
