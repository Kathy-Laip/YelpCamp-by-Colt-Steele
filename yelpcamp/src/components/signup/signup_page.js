import React, { Component } from 'react'
import SiginHader from '../signin/signin_page_header'
import SignInLogin from '../signin/signin_page_login'
import SinginWords from '../signin/signin_page_words'

export class SignUpPage extends Component {
  render() {
    return (
        <div className='signinbody'>
        <SiginHader/>
        <SinginWords idSiginIn='pkSignIn'/>
        <SignInLogin sign={this.props.sign} check={this.props.check}/>
      </div>
    )
  }
}

export default SignUpPage