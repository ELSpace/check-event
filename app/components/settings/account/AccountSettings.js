import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class AccountSettings extends Component {
  componentWillMount() {
    this.props.store.user.profile();
  }

  render() {
    const user = this.props.store.user.user || {};
    
    return (
      <div>
        <h5>Account Settings</h5>
        <hr />
        <br />
        <form>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" value={user.email} />
          </FormGroup> <br />
          <FormGroup>
            <Label>Fullname</Label>
            <Input type="text" name="fullname" value={user.fullname} />
          </FormGroup> <br />
          <FormGroup>
            <Label>Address</Label>
            <Input type="text" name="city" value={user.address} />
          </FormGroup> <br />
          <FormGroup>
            <Label>City</Label>
            <Input type="text" name="city" value={user.city} />
          </FormGroup>
          <FormGroup> <br />
            <Label>Company/Organisation Name</Label>
            <Input type="text" name="city" />
          </FormGroup>
          <br />
          <button className="btn btn-success pull-right">Update</button>
        </form>
      </div>
    );
  }
}

export default AccountSettings;