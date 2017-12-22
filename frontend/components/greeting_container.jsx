import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, login, signup } from '../actions/session_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
