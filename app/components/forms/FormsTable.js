import React from 'react';
import { Link } from 'react-router-dom';

const FormsTable = ({forms}) => 

    

  <div>
    <table className="table table-responsive table-bordered">
    <thead>
        <tr>
          <th>Form Name</th>
          <th>Entries	</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {forms.map(form => 
        <tr key={form._id} role="row" className="odd">
          <td>
              <Link to={'/display/'+form.name} target='_blank'>
              {form.name} 
              </Link>
              
          </td>
          <td>{form.entries.length}</td>
          <td>{form.createdAt}</td>
          <td>
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Update/Delete Form
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Update</a>
          <a className="dropdown-item" href="#">Delete</a>
        </div>
      </div>
          </td>
        </tr>
        )}
    </tbody>
    </table>
    <ul className="pagination">
    <li className="page-item">
        <a className="page-link" href="#">Prev</a>
    </li>
    <li className="page-item active">
        <a className="page-link" href="#">1</a>
    </li>
    <li className="page-item">
        <a className="page-link" href="#">2</a>
    </li>
    <li className="page-item">
        <a className="page-link" href="#">3</a>
    </li>
    <li className="page-item">
        <a className="page-link" href="#">4</a>
    </li>
    <li className="page-item">
        <a className="page-link" href="#">Next</a>
    </li>
    </ul>
  </div>;

export default FormsTable;
