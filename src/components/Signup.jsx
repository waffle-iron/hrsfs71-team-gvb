import React from 'react';

class Signup extends React.Component {
  constructor({pathname}) {
    super({pathname});
  }
  render () {
    return (
      <div>
      <div>
        <div id = 'signupPage'>
          <p>{this.pathname}</p>
          <input type='text' id='firstName' placeholder='First Name' />
          <input type='text' id='lastName' placeholder='Last Name' />
          <input type='text' id='email' placeholder='Email Address' />
        </div>
        <div id = 'buttons'>
          <p id='signupButton'>Sign Up</p>
          <p id='loginButton'> Login </p>
        </div>
      </div>
      </div>
    );
  }
}   

export default Signup;