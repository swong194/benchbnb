import { connect } from 'react-redux';
import SearchIndex from './search';
import { fetchBenches } from '../actions/bench_actions';

const mapStateToProps = state => {
  return {
    benches: Object.values(state.entities.benches),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBenches: () => dispatch(fetchBenches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
