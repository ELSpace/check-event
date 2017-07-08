import React from 'react';
import { Content } from '../../metronic/layout';
import {Link} from 'react-router-dom'

const Forms = () => (
  <Content.Item title="My FOrms" description="forms">
    <div className="portlet light portlet-fit ">
      <div className="portlet-title">
        <div className="caption">
          <i className="icon-settings font-red" />
          <span className="caption-subject font-red sbold uppercase">Editable Table</span>
        </div>
        <div className="actions">
          <div className="btn-group btn-group-devided" data-toggle="buttons">
            <label className="btn btn-transparent red btn-outline btn-circle btn-sm">
              <input type="radio" name="options" className="toggle" id="option1" />Actions</label>
            <label className="btn btn-transparent red btn-outline btn-circle btn-sm active"><span className="md-click-circle md-click-animate" style={{height: 82, width: 82, top: '-21px', left: '-13.1406px'}} />
              <input type="radio" name="options" className="toggle" id="option2" />Settings</label>
          </div>
        </div>
      </div>
      <div className="portlet-body">
        <div className="table-toolbar">
          <div className="row">
            <div className="col-md-6">
              <div className="btn-group">
                <Link to='/new'>
                <button id="sample_editable_1_new" className="btn green"> Add New
                  <i className="fa fa-plus" />
                </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="btn-group pull-right">
                <button className="btn green btn-outline dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Tools
                  <i className="fa fa-angle-down" />
                </button>
                <ul className="dropdown-menu pull-right">
                  <li>
                    <a href="javascript:;"> Print </a>
                  </li>
                  <li>
                    <a href="javascript:;"> Save as PDF </a>
                  </li>
                  <li>
                    <a href="javascript:;"> Export to Excel </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="sample_editable_1_wrapper" className="dataTables_wrapper no-footer"><div className="row"><div className="col-md-6 col-sm-6"><div className="dataTables_length" id="sample_editable_1_length"><label> <select name="sample_editable_1_length" aria-controls="sample_editable_1" className="form-control input-sm input-xsmall input-inline"><option value={5}>5</option><option value={15}>15</option><option value={20}>20</option><option value={-1}>All</option></select> records</label></div></div><div className="col-md-6 col-sm-6"><div id="sample_editable_1_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control input-sm input-small input-inline" placeholder aria-controls="sample_editable_1" /></label></div></div></div><div className="table-scrollable"><table className="table table-striped table-hover table-bordered dataTable no-footer" id="sample_editable_1" role="grid" aria-describedby="sample_editable_1_info" style={{width: 1602}}>
              <thead>
                <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="sample_editable_1" rowSpan={1} colSpan={1} aria-label=" Username : activate to sort column descending" style={{width: 267}} aria-sort="ascending"> Username </th><th className="sorting" tabIndex={0} aria-controls="sample_editable_1" rowSpan={1} colSpan={1} aria-label=" Full Name : activate to sort column ascending" style={{width: 296}}> Full Name </th><th className="sorting" tabIndex={0} aria-controls="sample_editable_1" rowSpan={1} colSpan={1} aria-label=" Points : activate to sort column ascending" style={{width: 195}}> Points </th><th className="sorting" tabIndex={0} aria-controls="sample_editable_1" rowSpan={1} colSpan={1} aria-label=" Notes : activate to sort column ascending" style={{width: 203}}> Notes </th><th className="sorting" tabIndex={0} aria-controls="sample_editable_1" rowSpan={1} colSpan={1} aria-label=" Edit : activate to sort column ascending" style={{width: 150}}> Edit </th><th className="sorting" tabIndex={0} aria-controls="sample_editable_1" rowSpan={1} colSpan={1} aria-label=" Delete : activate to sort column ascending" style={{width: 198}}> Delete </th></tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td className="sorting_1"> alex </td>
                  <td> Alex Nilson </td>
                  <td> 1234 </td>
                  <td className="center"> power user </td>
                  <td>
                    <a className="edit" href="javascript:;"> Edit </a>
                  </td>
                  <td>
                    <a className="delete" href="javascript:;"> Delete </a>
                  </td>
                </tr><tr role="row" className="even">
                  <td className="sorting_1"> goldweb </td>
                  <td> Sergio Jackson </td>
                  <td> 132 </td>
                  <td className="center"> elite user </td>
                  <td>
                    <a className="edit" href="javascript:;"> Edit </a>
                  </td>
                  <td>
                    <a className="delete" href="javascript:;"> Delete </a>
                  </td>
                </tr><tr role="row" className="odd">
                  <td className="sorting_1"> lisa </td>
                  <td> Lisa Wong </td>
                  <td> 434 </td>
                  <td className="center"> new user </td>
                  <td>
                    <a className="edit" href="javascript:;"> Edit </a>
                  </td>
                  <td>
                    <a className="delete" href="javascript:;"> Delete </a>
                  </td>
                </tr><tr role="row" className="even">
                  <td className="sorting_1"> nick12 </td>
                  <td> Nick Roberts </td>
                  <td> 232 </td>
                  <td className="center"> power user </td>
                  <td>
                    <a className="edit" href="javascript:;"> Edit </a>
                  </td>
                  <td>
                    <a className="delete" href="javascript:;"> Delete </a>
                  </td>
                </tr><tr role="row" className="odd">
                  <td className="sorting_1"> webriver </td>
                  <td> Antonio Sanches </td>
                  <td> 462 </td>
                  <td className="center"> new user </td>
                  <td>
                    <a className="edit" href="javascript:;"> Edit </a>
                  </td>
                  <td>
                    <a className="delete" href="javascript:;"> Delete </a>
                  </td>
                </tr></tbody>
            </table></div><div className="row"><div className="col-md-5 col-sm-5"><div className="dataTables_info" id="sample_editable_1_info" role="status" aria-live="polite">Showing 1 to 5 of 5 entries</div></div><div className="col-md-7 col-sm-7"><div className="dataTables_paginate paging_bootstrap_number" id="sample_editable_1_paginate"><ul className="pagination" style={{visibility: 'visible'}}><li className="prev disabled"><a href="#" title="Prev"><i className="fa fa-angle-left" /></a></li><li className="active"><a href="#">1</a></li><li className="next disabled"><a href="#" title="Next"><i className="fa fa-angle-right" /></a></li></ul></div></div></div></div>
      </div>
    </div>
  </Content.Item>
);

export default Forms;