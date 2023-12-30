import React, { Component } from 'react'
import logo from "../../Assets/Logo.svg"

export class SearchFooter extends Component {
  render() {
    return (
      <div className='searchFooter'>
        <div className="logoSearch">
            <img src={logo} alt=""/>
          </div>
      </div>
    )
  }
}

export default SearchFooter