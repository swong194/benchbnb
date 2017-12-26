import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount(){
    this.props.fetchBenches();
  }

  render(){
    let benches;
    if(this.props.benches.length !== 0){
      benches = this.props.benches.map(
        bench => <BenchIndexItem bench={bench}/>
      );
    } else {
      benches = <li>LOADING...</li>;
    }
    return (
      <main id='benches'>
      {benches}
    </main>
  );
  }
}

export default BenchIndex;
