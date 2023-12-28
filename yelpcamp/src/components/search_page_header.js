import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/Logo.svg"

export class SearchPageHeader extends Component {
  render() {
    return (
      <div className='headerSearch'>
        <div>
          <div className="logoSearch">
            <img src={logo} alt=""/>
          </div>
          <div className='home'>
            <Link to='/'><p>Home</p></Link>
          </div>
        </div>
        <div>
          <div className='btn' style={{width: '20vw', height: '8vh'}} id='createAcc'>
            <Link to=''><span>Create an account</span></Link>
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