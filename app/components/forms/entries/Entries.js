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
    
    let fields = [];

    singleForm && singleForm.fields.map(field => {
      if (field.type == 'checkbox-group') {
        field.values.map(value => {
          fields.push({
            label: value.value,
            name: field.name + value.label + value.value,
            type: 'checkbox'
          })
        });
      } else {
        fields.push(field);
      }
    });
    
    console.log(fields);
    console.log(entries)
    
    return <div className="container-fluid ">
      <div className="row">
      <div className="col-sm-12 entries">
      <table className="table table-bordered table-responsive">
          <thead>
            <tr> 
              {
                fields.map(field => {
                  if (field.type === 'header') return null;
                  return <th>{field.label}</th>;
                })
              }
            </tr>
          </thead>
          <tbody>
            { entries && entries.map(entry => {
                return <tr>
                  {fields.map(field => {
                    if (field.type === 'header') return null;
                    if (field.type === 'checkbox') 
                      return <td className="col-md-2">{'' + entry.data[field.name]}</td>
                    return <td className="col-md-2">{entry.data[field.name]}</td>
                  })}
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      </div>
    </div>
  
  }

}

export default Display;

