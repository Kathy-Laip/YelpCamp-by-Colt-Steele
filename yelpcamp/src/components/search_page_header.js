import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/Logo.svg"

export class SearchPageHeader extends Component {
  render() {
    return (
      <div className='headerSearch'>
        <div className='first'>
          <div className="logoSearch">
            <img src={logo} alt=""/>
          </div>
          <div className='home'>
            <Link to='/'><p>Home</p></Link>
          </div>
        </div>
        <div>
          <div className='btn' style={{width: '20vw', height: '100%'}} id='createAcc'>
            <Link to=''><p style={{ color: 'white', fontSize: '1.5rem'}}>Create an account</p></Link>
          </div>
          <div className='logIn'>
            <Link to=''><p>Login</p></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPageHeader