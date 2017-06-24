import React from 'react';
import PropTypes from 'prop-types';

import ActionsItem from './ActionsItem';

const Actions = ({actions}) => {
  const createActionsList = actions => 
    actions.map(action => 
      <ActionsItem 
        key={action.id}
        title={action.title} 
        icon={action.icon}
        url={action.url}
      />
    );

  return <div className="page-actions">
    <div className="btn-group">
      <button 
        type="button" 
        className="btn btn-circle btn-outline red dropdown-toggle" 
        data-toggle="dropdown"
      >
        <i className="fa fa-plus" />&nbsp;
          <span className="hidden-sm hidden-xs">New&nbsp;</span>&nbsp;
        <i className="fa fa-angle-down" />
      </button>
      <ul className="dropdown-menu" role="menu">
        {createActionsList(actions)}
      </ul>
    </div>
  </div>
};

Actions.propTypes = {
  actions: PropTypes.array.isRequired
};

export default Actions;