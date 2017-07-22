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
        <div className="container-fluid">
          <div className="actions">
            <Link to='/forms/new'> 
              <button className='btn btn-primary'>Create a New Form</button> 
            </Link>
          </div>
          <hr/>
          
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify" />
            {/* react-text: 10834 */} Striped Table{/* /react-text */}
            </div>
            <div className="card-block">
              <table className="table table-striped table-responsive table-bordered">
                <thead>
                  <tr>
                    <th>Form Name</th>
                    <th>Entries	</th>
                    <th>Date</th>
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
                        
                        <ul className="pagination">
                          <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                          <li className="page-item active"><a className="page-link" href="#">1</a>
                          </li><li className="page-item"><a className="page-link" href="#">2</a>
                          </li><li className="page-item"><a className="page-link" href="#">3</a></li>
                          <li className="page-item"><a className="page-link" href="#">4</a></li><li className="page-item">
                            <a className="page-link" href="#">Next</a></li></ul></div></div>                        

         </div> 
    );
  }
}

