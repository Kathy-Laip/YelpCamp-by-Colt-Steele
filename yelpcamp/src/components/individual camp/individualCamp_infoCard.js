import React, { Component } from 'react'

export class IndividualCamp_infoCard extends Component {
    render() {
      return (
          <div className='cardInd'>
          {console.log(this.props.infoCard)}
              <div className='imageCard'>
                  <img src={this.props.infoCard[0].img}/>
              </div>
              <p style={{color: 'black', fontWeight: '700'}}>{this.props.infoCard[0].p}</p>
              <p>${this.props.infoCard[0].price}/night</p>
              <p>{this.props.infoCard[0].textForIndividual}</p>
              <p style={{fontStyle: 'italic'}}>Submitted by {this.props.infoCard[0].author}</p>
          </div>
      )
    }
}

export default IndividualCamp_infoCard