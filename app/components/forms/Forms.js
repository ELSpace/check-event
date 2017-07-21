import React from 'react';
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
      <div className="app-body">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify" />
            {/* react-text: 10834 */} Striped Table{/* /react-text */}
            </div>
            <div className="card-block">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Form Name</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr><td>Yiorgos Avraamu
                        </td><td>2012/01/01
                          </td><td>Member</td><td>
                            <span className="badge badge-success">Active</span>
                            </td></tr><tr><td>Avram Tarasios</td>
                            <td>2012/02/01</td><td>Staff</td><td>
                              <span className="badge badge-danger">Banned</span>
                              </td></tr><tr><td>Quintin Ed</td>
                              <td>2012/02/01</td><td>Admin</td><td>
                                <span className="badge badge-default">Inactive</span>
                                </td></tr><tr><td>Enéas Kwadwo</td>
                                <td>2012/03/01</td><td>Member</td><td>
                                  <span className="badge badge-warning">Pending</span>
                                  </td></tr><tr><td>Agapetus Tadeáš</td>
                                  <td>2012/01/21</td><td>Staff</td><td>
                                    <span className="badge badge-success">Active</span>
                                    </td></tr></tbody></table><ul className="pagination">
                                      <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                      <li className="page-item active"><a className="page-link" href="#">1</a>
                                      </li><li className="page-item"><a className="page-link" href="#">2</a>
                                      </li><li className="page-item"><a className="page-link" href="#">3</a></li>
                                      <li className="page-item"><a className="page-link" href="#">4</a></li><li className="page-item">
                                        <a className="page-link" href="#">Next</a></li></ul></div></div>
                                         <Link to='/forms/new'> 
                  <button className='btn btn-primary'>Create a New Form</button> 
                </Link>
{/* OLD TABLE :v 
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
          </div> */}

         </div> 
    );
  }
}

