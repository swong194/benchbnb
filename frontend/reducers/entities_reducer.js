import { combineReducers } from 'redux';
import benchesReducer from './bench_reducers';

const entitiesReducer = combineReducers({
  benches: benchesReducer,
});

export default entitiesReducer;
