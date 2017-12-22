import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {session: {currentUser: action.user }});
    default:
      return state;
  }
};