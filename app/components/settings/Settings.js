import React from 'react';
import { Content } from '../../metronic/layout';
import pic from '../../assets/img/avatar11.jpg';

const Settings = () => (
  <Content.Item title="Settings" description=" , User Settings" crumb="Settings">
    <div className="tabbable-line tabbable-full-width">
        <ul className="nav nav-tabs">
          <li className="active">
            <a href="#tab_1_1" data-toggle="tab" aria-expanded="true"> Overview </a>
          </li>
          <li className>
            <a href="#tab_1_3" data-toggle="tab" aria-expanded="false"> Account Settings </a>
          </li>
         </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="tab_1_1">
            <div className="row">
              <div className="col-md-3">
                <ul className="list-unstyled profile-nav">
                  <li>
                    <img src={pic} className="img-responsive pic-bordered" alt />
                    <a href="javascript:;" className="profile-edit"> Edit </a>
                  </li>                 
                </ul>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-8 profile-info">
                    <h1 className="font-green sbold uppercase">John Doe</h1>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam tincidunt erat volutpat laoreet dolore magna aliquam tincidunt erat volutpat.
                    </p>
                    <p>
                      <a href="javascript:;"> www.mywebsite.com </a>
                    </p>
                    <ul className="list-inline">
                      <li>
                        <i className="fa fa-map-marker" /> Spain </li>
                      <li>
                        <i className="fa fa-calendar" /> 18 Jan 1982 </li>
                      <li>
                        <i className="fa fa-briefcase" /> Design </li>
                      <li>
                        <i className="fa fa-star" /> Top Seller </li>
                      <li>
                        <i className="fa fa-heart" /> BASE Jumping </li>
                    </ul>
                  </div>              
                </div>         
               </div>
            </div>
          </div>
          <div className="tab-pane" id="tab_1_3">
            <div className="row profile-account">
              <div className="col-md-3">
                <ul className="ver-inline-menu tabbable margin-bottom-10">
                  <li className="active">
                    <a data-toggle="tab" href="#tab_1-1" aria-expanded="false">
                      <i className="fa fa-cog" /> Personal info </a>
                    <span className="after"> </span>
                  </li>
                  <li className>
                    <a data-toggle="tab" href="#tab_2-2" aria-expanded="false">
                      <i className="fa fa-picture-o" /> Change Avatar </a>
                  </li>
                  <li className>
                    <a data-toggle="tab" href="#tab_3-3" aria-expanded="false">
                      <i className="fa fa-lock" /> Change Password </a>
                  </li>
                  <li className>
                    <a data-toggle="tab" href="#tab_4-4" aria-expanded="false">
                      <i className="fa fa-eye" /> Privacity Settings </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-9">
                <div className="tab-content">
                  <div id="tab_1-1" className="tab-pane active">
                    <form role="form" action="#">
                      <div className="form-group">
                        <label className="control-label">First Name</label>
                        <input type="text" placeholder="John" className="form-control" /> </div>
                      <div className="form-group">
                        <label className="control-label">Last Name</label>
                        <input type="text" placeholder="Doe" className="form-control" /> </div>
                      <div className="form-group">
                        <label className="control-label">Mobile Number</label>
                        <input type="text" placeholder="+1 646 580 DEMO (6284)" className="form-control" /> </div>
                      <div className="form-group">
                        <label className="control-label">Interests</label>
                        <input type="text" placeholder="Design, Web etc." className="form-control" /> </div>
                      <div className="form-group">
                        <label className="control-label">Occupation</label>
                        <input type="text" placeholder="Web Developer" className="form-control" /> </div>
                      <div className="form-group">
                        <label className="control-label">About</label>
                        <textarea className="form-control" rows={3} placeholder="We are KeenThemes!!!" defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Website Url</label>
                        <input type="text" placeholder="http://www.mywebsite.com" className="form-control" /> </div>
                      <div className="margiv-top-10">
                        <a href="javascript:;" className="btn green"> Save Changes </a>
                        <a href="javascript:;" className="btn default"> Cancel </a>
                      </div>
                    </form>
                  </div>
                  <div id="tab_2-2" className="tab-pane">
                    <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    </p>
                    <form action="#" role="form">
                      <div className="form-group">
                        <div className="fileinput fileinput-new" data-provides="fileinput">
                          <div className="fileinput-new thumbnail" style={{width: 200, height: 150}}>
                            <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image" alt /> </div>
                          <div className="fileinput-preview fileinput-exists thumbnail" style={{maxWidth: 200, maxHeight: 150}}> </div>
                          <div>
                            <span className="btn default btn-file">
                              <span className="fileinput-new"> Select image </span>
                              <span className="fileinput-exists"> Change </span>
                              <input type="file" name="..." /> </span>
                            <a href="javascript:;" className="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
                          </div>
                        </div>
                        <div className="clearfix margin-top-10">
                          <span className="label label-danger"> NOTE! </span>
                          <span> Attached image thumbnail is supported in Latest Firefox, Chrome, Opera, Safari and Internet Explorer 10 only </span>
                        </div>
                      </div>
                      <div className="margin-top-10">
                        <a href="javascript:;" className="btn green"> Submit </a>
                        <a href="javascript:;" className="btn default"> Cancel </a>
                      </div>
                    </form>
                  </div>
                  <div id="tab_3-3" className="tab-pane">
                    <form action="#">
                      <div className="form-group">
                        <label className="control-label">Current Password</label>
                        <input type="password" className="form-control" /> </div>
                      <div className="form-group">
                        <label className="control-label">New Password</label>
                        <input type="password" className="form-control" /> </div>
                      <div className="form-group">
                        <label className="control-label">Re-type New Password</label>
                        <input type="password" className="form-control" /> </div>
                      <div className="margin-top-10">
                        <a href="javascript:;" className="btn green"> Change Password </a>
                        <a href="javascript:;" className="btn default"> Cancel </a>
                      </div>
                    </form>
                  </div>
                  <div id="tab_4-4" className="tab-pane">
                    <form action="#">
                      <table className="table table-bordered table-striped">
                        <tbody><tr>
                            <td> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus.. </td>
                            <td>
                              <div className="mt-radio-inline">
                                <label className="mt-radio">
                                  <input type="radio" name="optionsRadios1" defaultValue="option1" /> Yes
                                  <span />
                                </label>
                                <label className="mt-radio">
                                  <input type="radio" name="optionsRadios1" defaultValue="option2" defaultChecked /> No
                                  <span />
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon </td>
                            <td>
                              <div className="mt-radio-inline">
                                <label className="mt-radio">
                                  <input type="radio" name="optionsRadios21" defaultValue="option1" /> Yes
                                  <span />
                                </label>
                                <label className="mt-radio">
                                  <input type="radio" name="optionsRadios21" defaultValue="option2" defaultChecked /> No
                                  <span />
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon </td>
                            <td>
                              <div className="mt-radio-inline">
                                <label className="mt-radio">
                                  <input type="radio" name="optionsRadios31" defaultValue="option1" /> Yes
                                  <span />
                                </label>
                                <label className="mt-radio">
                                  <input type="radio" name="optionsRadios31" defaultValue="option2" defaultChecked /> No
                                  <span />
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon </td>
                            <td>
                              <div className="mt-radio-inline">
                                <label className="mt-radio">
                                  <input type="radio" name="optionsRadios41" defaultValue="option1" /> Yes
                                  <span />
                                </label>
                                <label className="mt-radio">
                                  <input type="radio" name="optionsRadios41" defaultValue="option2" defaultChecked /> No
                                  <span />
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody></table>
                        <div className="margin-top-10">
                        <a href="javascript:;" className="btn green"> Save Changes </a>
                        <a href="javascript:;" className="btn default"> Cancel </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>

  </Content.Item>
    );
export default Settings;