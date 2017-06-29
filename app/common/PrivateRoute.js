import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, redirectTo, ...rest}) => 
  <Route
    {...rest}
    render={props => (
      isAuthenticated
      ? (
        <Component {...props} />
      )
      : (<Redirect to={{ pathname: redirectTo, state: { from: props.location} }} />)
    )}
  />;

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.func
};

export default PrivateRoute;