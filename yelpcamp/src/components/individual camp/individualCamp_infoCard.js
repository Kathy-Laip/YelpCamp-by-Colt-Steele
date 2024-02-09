import React, { Component } from 'react'

export class IndividualCamp_infoCard extends Component {
    render() {
      return (
          <div className='cardInd'>
              <div className='imageCard'>
                  <img src={this.props.infoCard[0].img}/>
              </div>
              <div className='cardIndNamePrice'>
                <p style={{color: 'black', fontWeight: '700'}} id='firstNamePrice'>{this.props.infoCard[0].p}</p>
                <p style={{color: 'black', fontWeight: '400'}} id='secondNamePrice'>${this.props.infoCard[0].price}/night</p>
              </div>
              <p>{this.props.infoCard[0].textForIndividual}</p>
              <p style={{fontStyle: 'italic'}}>Submitted by {this.props.infoCard[0].author}</p>
          </div>
      )
    }
}

export default IndividualCamp_infoCard