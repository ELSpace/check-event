import React from 'react';

import '../style.css';
import logo from '../../../assets/img/elspacelogo.png'


class Login extends React.Component {
  componentWillMount(){
    window.$('body').attr('class', 'login' );
  }
  render() { return <div>
        <div className="content">
          <div>
            <img src={logo} className="center-block img-responsive" width="100" alt />
          </div>
          <form className="login-form" action="index.html" method="post" noValidate="novalidate">
            <h3 className="form-title font-green">LOGIN</h3>
            <div className="alert alert-danger display-hide">
              <button className="close" data-close="alert" />
              <span> Enter any username and password. </span>
            </div>
            <div className="form-group">
              {/*ie8, ie9 does not support html5 placeholder, so we just show field title for that*/}
              <label className="control-label visible-ie8 visible-ie9">Username</label>
              <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" /> </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Password</label>
              <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password" /> </div>
            <div className="form-actions">
              <button type="submit" className="btn green uppercase">Login</button>
              <label className="rememberme check mt-checkbox mt-checkbox-outline">
                <input type="checkbox" name="remember" defaultValue={1} />Remember
                <span />
              </label>
              <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
            </div>
            <div className="login-options">
              <h4>Or login with</h4>
              <ul className="social-icons">
                <li>
                  <a className="social-icon-color facebook" data-original-title="facebook" href="javascript:;" />
                </li>
                <li>
                  <a className="social-icon-color twitter" data-original-title="Twitter" href="javascript:;" />
                </li>
                <li>
                  <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;" />
                </li>
                <li>
                  <a className="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;" />
                </li>
              </ul>
            </div>
            <div className="create-account">
              <p>
                <a href="javascript:;" id="register-btn" className="uppercase">Create an account</a>
              </p>
            </div>
          </form>
          {/* END LOGIN FORM */}
         
        
        </div>
        </div>
         }}

  export default Login;