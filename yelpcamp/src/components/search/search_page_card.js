import React, { Component } from 'react'

export class SearchPage_Card extends Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
        <div className='card'>
            <div className='imageCard'>
                <img src={this.props.infoCard.img}/>
            </div>
            <p style={{color: 'black', fontWeight: '700'}}>{this.props.infoCard.p}</p>
            <p>{this.props.infoCard.text}</p>
            <button className='whiteBtn' style={{width: '100%'}}><p style={{color: 'black', fontWeight: '700'}}>View Campground</p></button>
        </div>
      )
    }
}

export default SearchPage_Card