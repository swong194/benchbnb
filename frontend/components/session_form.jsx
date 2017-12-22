import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
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
        <form onSubmit={this.handleSubmit}>
          <label>Username
          <input type='text' onChange={this.handleChange('username')}/>
        </label>
        <br/>
        <label>Password
          <input type='password' onChange={this.handleChange('password')}/>
        </label>
        <button value='Log In'></button>
        </form>
      );
    }
    else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Username
          <input type='text' onChange={this.handleChange('username')}/>
        </label>
        <br/>
        <label>Password
          <input type='password' onChange={this.handleChange('password')}/>
        </label>
        <button value='Sign Up'></button>
        </form>
      );

    }
  }
}

export default SessionForm;
