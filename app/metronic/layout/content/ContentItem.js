import React from 'react';
import PropTypes from 'prop-types';

const ContentItem = ({title , description, children}) => (
  <div className="page-content">
    <h1 className="page-title"> {title}
      <small> {description} </small>
    </h1>
    <div className="page-bar">
      <ul className="page-breadcrumb">
        <li>
          <i className="icon-home" />
          <a href="index.html">Home</a>
          <i className="fa fa-angle-right" />
        </li>
        <li>
          <span>Dashboard</span>
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
  ])
};

 export default ContentItem;