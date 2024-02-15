import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/Logo.svg"
import menu from '../../Assets/Menu.svg'

export class SearchPageHeader extends Component {
  constructor(props){
    super(props)
  }

  clickMenuHam(){
    let id = document.getElementById('hamMenu')
    if(id.style.display === 'flex'){
      id.style.display = 'none'
    } else{
      id.style.display = 'flex'
    }
  }

  render() {
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
        <div className='menuDesk'>
          <div className='btn' style={{width: '20vw', height: '100%'}} id='createAcc'>
            <Link to='/signup'><p style={{ color: 'white', fontSize: '1.5rem'}}>Create an account</p></Link>
          </div>
          <div className='logIn'>
            <Link to='/signin'>{user}</Link>
          </div>
        </div>
        <div className='menuMob'>
          <img src={menu} onClick={() => this.clickMenuHam()}></img>
          <div id='hamMenu'>
            <div id='linksMenu'>
              <p><Link to='/signin'>{user}</Link></p>
              <p><Link to='/signup'><p>Create an account</p></Link></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPageHeader