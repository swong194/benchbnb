import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = user => dispatch =>{
  APIUtil.login(user)
          .then(res => dispatch(receiveCurrentUser(res)),
          res => dispatch(receiveSessionErrors(res)));
};

export const logout = () => dispatch => {
  APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)));
};

export const signup = user => dispatch => {
  APIUtil.signup(user).then((res) => dispatch(receiveCurrentUser(res)),
          (res) => dispatch(receiveSessionErrors(res)));
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveSessionErrors = (errors) =>{
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
  };
};
