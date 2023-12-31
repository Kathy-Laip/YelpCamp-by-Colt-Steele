import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/Logo.svg"

export class SiginHader extends Component {
  render() {
    return (
      <div className='headerSigin'>
        <div className="logoSearch">
            <img src={logo} alt=""/>
        </div>

        <div className='backSearch'>
            <Link to='/searchCamp'><p>Back to campgrounds</p></Link>
        </div>
      </div>
    )
  }
}

export default SiginHader