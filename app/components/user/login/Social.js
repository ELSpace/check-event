import React from 'react';
import PropTypes from 'prop-types';

const Social = ({msg}) =>
  <div className="login-options">
    <h4>{msg}</h4>
    <ul className="social-icons">
      <li>
        <a className="social-icon-color facebook" data-original-title="facebook"/>
      </li>
      <li>
        <a className="social-icon-color twitter" data-original-title="Twitter"/>
      </li>
      <li>
        <a className="social-icon-color googleplus" data-original-title="Goole Plus"/>
      </li>
      <li>
        <a className="social-icon-color linkedin" data-original-title="Linkedin"/>
      </li>
    </ul>
  </div>;

Social.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Social;