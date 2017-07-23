import React from 'react';

import FormsTableRow from './FormsTableRow';

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
			{forms.map(form => <FormsTableRow key={form._id} form={form}></FormsTableRow> )}
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
