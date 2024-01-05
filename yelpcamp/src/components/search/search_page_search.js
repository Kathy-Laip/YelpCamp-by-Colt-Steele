import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import search from '../../Assets/Search\ Icon.svg'

export class SearchSearch extends Component {
  render() {
    return (
      <div className='searchSearch'>
        <div className='boxSearch'>
            <h2>Welcome to YelpCamp!</h2>
            <p>View our hand-picked campgrounds from all over
            the world, or add your own.</p>
            <div className='searchLine'>
                <img src={search}/>
                <input placeholder='Search for camps'></input>
            </div>
            <div className='btn btnSearch'><p>Search</p></div>
            <div id='linkP'><Link to='/addNewCamp'>Or add your own campground</Link></div>
        </div>
      </div>
    )
  }
}

export default SearchSearch