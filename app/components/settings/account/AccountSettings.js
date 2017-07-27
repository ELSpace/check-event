import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { observer, inject } from 'mobx-react';

@inject(allStores => ({user: allStores.store.user}))
@observer
class AccountSettings extends Component {

  componentWillMount() {
    this.props.user.profile();
  }

  onChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.props.user.user[name] = value;
  }

  render() {
    const user = this.props.user.user || {};

    this.onChange = this.onChange.bind(this);
    
    return (
      <div>
        <h5>Account Settings</h5>
        <hr />
        <br />
        <form>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" value={user.email} onChange={this.onChange}/>
          </FormGroup> <br />
          <FormGroup>
            <Label>Fullname</Label>
            <Input type="text" name="fullname" value={user.fullname} onChange={this.onChange} />
          </FormGroup> <br />
          <FormGroup>
            <Label>Address</Label>
            <Input type="text" name="address" value={user.address} onChange={this.onChange} />
          </FormGroup> <br />
          <FormGroup>
            <Label>City</Label>
            <Input type="text" name="city" value={user.city} onChange={this.onChange} />
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