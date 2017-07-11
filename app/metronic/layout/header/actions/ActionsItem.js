import React from 'react';
import PropTypes from 'prop-types';

const ActionsItem = ({title, icon, url}) => (
    <li>
      <Link to={url}>
        <i className={icon} /> {title}
      </Link>
    </li>
);

ActionsItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired  
};

export default ActionsItem;
