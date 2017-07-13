import React from 'react';
import PropTypes from 'prop-types';

const ContentItem = ({title , description, children,crumb}) => (
  <div className="page-content" style={{minHeight: 1440}}>
    <h1 className="page-title"> {title}
      <small> {description} </small>
    </h1>
    <div className="page-bar">
      <ul className="page-breadcrumb">
        <li>
          <i className="fa fa-home" />
          <a href="/">Home</a>
          <i className="fa fa-angle-right" />
        </li>
        <li>
          <span>{crumb}</span>
        </li>
      </ul>
    </div>
    {children}
  </div>
);

ContentItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  crumb:PropTypes.string.isRequired
};

 export default ContentItem;