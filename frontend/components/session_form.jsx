import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit.bind(this);
    this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  handleChange(type) {
    return (e) => {
      this.setState({type: e.target.value});
    };
  }

  render() {
    if (this.props.formType === 'login') {
      return (
        <div id='session'>
          <Link to='/signup'>Sign Up</Link>
          <form onSubmit={this.handleSubmit}>
            <label>Username
              <input type='text' onChange={this.handleChange('username')}/>
            </label>
            <br/>
            <label>Password
              <input type='password' onChange={this.handleChange('password')}/>
            </label>
            <button>Log In</button>
          </form>
        </div>
      );
    }
    else {
      return (
        <div id='session'>
          <Link to='/login'>Sign In</Link>
          <form onSubmit={this.handleSubmit}>
            <label>Username
              <input type='text' onChange={this.handleChange('username')}/>
            </label>
            <br/>
            <label>Password
              <input type='password' onChange={this.handleChange('password')}/>
            </label>
            <button>Sign Up</button>
          </form>
        </div>
      );
    }
  }
}

export default SessionForm;
