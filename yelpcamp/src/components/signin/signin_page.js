import React, { Component } from 'react'
import SiginHader from './signin_page_header'
import SignInLogin from './signin_page_login'
import SinginWords from './signin_page_words'

export class SignInPage extends Component {
  render() {
    return (
      <div className='signinbody'>
        <SiginHader/>
        <SinginWords/>
        <SignInLogin sign={this.props.sign} check={this.props.check}/>
      </div>
    )
  }
}

export default SignInPage