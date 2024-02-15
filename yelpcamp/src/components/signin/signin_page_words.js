import React, { Component } from 'react'
import user from '../../Assets/User\ Testimonial.svg'

export class SinginWords extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className='signInWords'>
        <div className='centerWords'>
            <h2 style={{color: 'black', fontWeight: '700'}}>"YelpCamp has noestly saved me hours of research time, and the cmos on here are definitely well picked and added."</h2>
            <div className='user'>
                <img src={user}></img> 
                <div id='userInfo'>
                  <p style={{color: 'black', fontWeight: '700'}}>May Andrews</p>
                  <p>Proffesional Hiker</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default SinginWords