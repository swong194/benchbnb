import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  render(){
    if(this.props.currentUser){
      return (
        <main>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </main>
      );
    } else {
      return (
        <main>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Sign In</Link>
        </main>
      );
    }
  }
}

export default Greeting;
