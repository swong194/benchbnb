import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const mapStateToProps = state => {
  return { loggedIn : Boolean(state.session.currentUser)};
};

export default withRouter(connect(mapStateToProps, null)(Auth));
