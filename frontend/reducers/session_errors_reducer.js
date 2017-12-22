import { RECEIVE_CURRENT_USER, RECEIEVE_SESSION_ERRORS } from '../actions/session_actions';

const sessionReducer = (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];

    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, action.errors);


    default:
      return state;
  }
};
