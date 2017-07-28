import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, Button, CardImg, CardSubtitle, CardBlock } from 'reactstrap';
import { observer, inject } from 'mobx-react';

@inject(allStores => ({
  formStore: allStores.store.form
}))
@observer
class FormCard extends Component {
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
    let name = form.name.substr(0, 30);
    if (form.name.length > 30) name += '...';

    return (
       <Card className="plus-card">
        <CardBlock>
          <CardTitle alt={form.name}>
            {name}
          </CardTitle>
          <br />   
          <Link to={`/forms/${form._id}/edit`} className="card-link">Update</Link>
          <Link to={'/'} className="card-link">View</Link>
        </CardBlock>
        <div className="card-footer text-muted">
          <small>Updated at 25/21/2017</small>
        </div>
      </Card>
      /*<tr key={form._id} role="row" className="odd">
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
              <Link to={`/forms/${form._id}/edit`} style={{textDecoration: 'none'}}>
                <DropdownItem>Edit </DropdownItem>
              </Link>
              <DropdownItem onClick={this.remove.bind(this)}>Remove</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </td>
      </tr>*/
    )
  }
}

export default FormCard;
