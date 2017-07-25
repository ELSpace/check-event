import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { observer, inject } from 'mobx-react';

@inject(allStores => ({
  formStore: allStores.store.form
}))
@observer
class FormsTableRow extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  remove() {
    this.props.formStore.remove(this.props.form._id);
  }

  render() {
    const { form } = this.props;
    
    return (
      <tr key={form._id} role="row" className="odd">
        <td>
          <Link to={'/display/'+form._id} target='_blank'>
            {form.name}
          </Link>
        </td>
        <td>{form.entries.length}</td>
        <td>{form.createdAt}</td>
        <td>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Actions
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/forms/edit">
                Edit </Link></DropdownItem>
              <DropdownItem onClick={this.remove.bind(this)}>Remove</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </td>
      </tr>
    )
  }
}
  
				
			
   

export default FormsTableRow;
