import React, { Component } from 'react'
import map from '../../Assets/Map.png'
import IndividualCamp_infoCard from './individualCamp_infoCard'


export class IndividualCamp_info extends Component {
    render() {
      return (
        <div className='infoIndCamp'>
          <div className='mapCamp'>
            <img src={map}/>
          </div>
          <div className='infoMainCamp'>
            <div className='descCamp'>
                <IndividualCamp_infoCard infoCard={this.props.objIndCamp}/>
            </div>
            <div className='chatIndCamp'></div>
          </div>
        </div>
      )
    }
}

export default IndividualCamp_info