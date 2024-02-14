import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/Logo.svg"

export class SearchPageHeader extends Component {
  render() {
    console.log(this.props.user[0])
    let user
    if(this.props.user[0]){
      user = <p>{this.props.user[0].login}</p>
    } else user = <p>Login</p>
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
            <Link to='/signup'><p style={{ color: 'white', fontSize: '1.5rem'}}>Create an account</p></Link>
          </div>
          <div className='logIn'>
            <Link to='/signin'>{user}</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPageHeader