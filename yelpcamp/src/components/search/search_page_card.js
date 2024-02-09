import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SearchPageCard extends Component {
    render() {
      return (
        <div className='card'>
            <div className='imageCard'>
                <img src={this.props.infoCard.img}/>
            </div>
            <p style={{color: 'black', fontWeight: '700'}}>{this.props.infoCard.p}</p>
            <p>{this.props.infoCard.text}</p>
            <button className='whiteBtn' style={{width: '100%'}}><Link to='/individualCamp' onClick={() => this.props.setCamp(this.props.infoCard.p)}><p style={{ fontWeight: '700'}}>View Campground</p></Link></button>
        </div>
      )
    }

}

export default SearchPageCard