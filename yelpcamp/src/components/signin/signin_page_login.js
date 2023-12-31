import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SignInLogin extends Component {
  render() {
    return (
      <div className='signInLogin'>
        <h1>Start exploring camps from all around the world.</h1>
        <p>Username</p>
        <input type='login'></input>
        <p>Password</p>
        <input type='password'></input>
        <button className='btn' id='logBtn'>
            <Link to='/'>Login</Link>
        </button>
        <p>Not a use yet?</p><Link to='/'><p id='signupLink'>Create an account</p></Link>
      </div>
    )
  }
}

export default SignInLogin