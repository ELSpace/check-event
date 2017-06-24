import React from 'react';
import PropTypes from 'prop-types';

const ActionsItem = ({title, icon, url}) => (
    <li>
      <a href={url}>
        <i className={icon} /> {title}
      </a>
    </li>
);

ActionsItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired  
};

export default ActionsItem;
