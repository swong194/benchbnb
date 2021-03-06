import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router';
import { login, signup } from '../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: Object.values(state.errors.session),
    formType: ownProps.location.pathname.slice(1)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = signup;
  if(ownProps.match.path.slice ==='login'){
    formType = login;
  }
  return {
    processForm: (user) => (dispatch(formType(user)))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
