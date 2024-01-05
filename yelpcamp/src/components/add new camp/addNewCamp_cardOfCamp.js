import React, { Component } from 'react'

export class CardOfCamp extends Component {
  render() {
    return (
      <div className='cardOfCamp'>
        <h2>Add New Campground</h2>
        <p>Campground Name</p>
        <input placeholder='Enter name of your campground'></input>
        <p>Price</p>
        <input placeholder='Cost'></input>
        <p>Image</p>
        <input placeholder='www.example.html'></input>
        <p>Description</p>
        <input type='text' id='textCard' placeholder='Enter information about your campgrounds for users.'></input>
        <button className='btn campBtn'><p>Add Campground</p></button>
      </div>
    )
  }
}

export default CardOfCamp