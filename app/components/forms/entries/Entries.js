import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import './style.css';

@inject(({store}) => ({
  entry: store.entry,
  form: store.form
}))
@observer
class Display extends Component {

  componentWillMount() {
    const formID = this.props.match.params.form;

    this.props.entry.find(formID);
    this.props.form.getSingle(formID);
  }

  render() {
    const entries = this.props.entry.entries;
    const singleForm = this.props.form.singleForm;

    console.log(singleForm);
    return <div className="container">
      <div className="row">
        <table className="table table-bordered">
          <tr>
            {
              singleForm && singleForm.fields.map(field => 
                field.type !== "header" && <th>{field.label}</th>
              )
            }
          </tr>
          { entries && entries.map(entry => {
            return <tr>
              {singleForm.fields.map(field => {
                return field.type !== 'header' && <td>{entry.data[field.name]}</td>
              })}
            </tr>
          })
          }
        </table>
      </div>
    </div>
  
  }

}

export default Display;

