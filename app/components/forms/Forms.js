import React from 'react';
import { Content } from '../../metronic/layout';
import {Link} from 'react-router-dom'
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class Forms extends React.Component {

  componentWillMount() {
    this.props.store.form.find();
  }

  render() {
    return (
      <Content.Item title="My Forms" description=" , Display Created Forms" crumb="Forms">
        <div className="portlet light portlet-fit ">
          <div className="portlet-title">
            <div className="caption">
              <i className="fa fa-cog" />
              <span className="caption-subject font-red sbold uppercase">My Forms</span>
            </div>
            <div className="actions">
                <Link to='/forms/new'> 
                  <button className='btn btn-primary'>Create a New Form</button> 
                </Link>
              </div>
            </div>
         
          <div className="portlet-body">
            <div className="table-scrollable">
            <table className="table table-striped table-hover table-bordered dataTable no-footer" id="sample_editable_1" role="grid" aria-describedby="sample_editable_1_info" style={{width: 1602}}>
                  <thead>
                    <tr role="row">
                      <th className="sorting_asc" tabIndex={0} aria-controls="sample_editable_1" rowSpan={1} colSpan={1} style={{width: 267}}> 
                        Name
                      </th>
                      <th className="sorting" tabIndex={0} aria-controls="sample_editable_1" rowSpan={1} colSpan={1} aria-label=" Full Name : activate to sort column ascending" style={{width: 296}}>
                        Entries
                      </th>
                      <th className="sorting" tabIndex={0} aria-controls="sample_editable_1" rowSpan={1} colSpan={1} aria-label=" Full Name : activate to sort column ascending" style={{width: 296}}>
                        Created At
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.store.form.forms.map(form => 
                      <tr key={form._id} role="row" className="odd">
                        <td className="sorting_1"><Link to={'/display/'+form.name} target='_blank'>
                        {form.name} 
                        </Link>
                        </td>
                        <td>{form.entries.length}</td>
                        <td>{form.createdAt}</td>
                      </tr>  
                    
                    )}
                    
                  </tbody>
                </table>
              </div>
              </div>
          </div>
      </Content.Item>
    );
  }
}

