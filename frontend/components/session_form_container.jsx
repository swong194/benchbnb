import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { withRouter } from 'react-router';


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: Object.values(state.errors),
    formType: ownProps.location.pathname.slice(1)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (formType) => (dispatch(formType))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
