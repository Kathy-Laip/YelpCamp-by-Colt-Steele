import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SignInLogin extends Component {
  constructor(props){
    super(props)
    this.state ={
      login: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.ansCheck = this.ansCheck.bind(this)
  }

  handleInput(event){
    if(event.target.id === 'login'){
      this.setState({login: event.target.value})
    }
    if(event.target.id === 'password'){
      this.setState({password: event.target.value})
    }
  }

  ansCheck(){
    let ans = this.props.check(this.props.sign, this.state)
    if(ans === 'hasntUser') alert('Возможно вы ввели неправильный логин или пароль, попробуйте еще раз!')
    else alert(ans)
  }

  render() {
    let btn
    let line
    console.log(this.props)
    if(this.props.sign === 'si'){
      btn = <button className='btn' id='logBtn' onClick={this.ansCheck}>Login</button>
      line = <div><p>Not a use yet?</p><Link to='/signup' ><p id='signupLink'>Create an account</p></Link></div>
    }
    else{
      btn = <button className='btn' id='logBtn' onClick={this.ansCheck}>Create an account</button>
      line = <div><p>Already a user?</p><Link to='/signin' ><p id='signupLink'>Sign in</p></Link></div>
    }
    return (
      <div className='signInLogin'>
        <h1>Start exploring camps from all around the world.</h1>
        <p>Username</p>
        <input id='login' type='login' value={this.state.login} onChange={this.handleInput}></input>
        <p>Password</p>
        <input id='password' type='password' value={this.state.password} onChange={this.handleInput}></input>
        {btn}
        {line}
      </div>
    )
  }
}

export default SignInLogin