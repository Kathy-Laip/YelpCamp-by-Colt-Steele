import React, { Component } from 'react'
import map from '../../Assets/Map.png'
import chat from '../../Assets/Chat\ Bubble.svg'
import IndividualCamp_infoCard from './individualCamp_infoCard'


export class IndividualCamp_info extends Component {
    constructor(props){
      super(props)
      this.time = new Date()
      this.getTime = this.getTime.bind(this)
    }
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
            <div className='chatIndCamp'>
            {this.props.objIndCamp[0].his.map(el => (
              <div className='blockComm'>
                <div className='commBlock'>
                  <p style={{color: 'black', fontWeight: '700', width: '50%', float: 'left'}}>{el.name}</p>
                  <p style={{width: '50%', float:'right', textAlign:'right'}}>{
                    this.getTime(el.time)
                    } ago</p>
                </div>
                <p>{el.text}</p>
                <hr style={{height: '1px', backgroundColor: 'gray'}}/>
              </div>
            ))}
            <button className='btn'><img src={chat} style={{display: 'inline', width: '40%'}}></img><p style={{ color: 'white', fontSize: '1.5rem'}}>Leave a Review</p></button>
            </div>
          </div>
        </div>
      )
    }

    getTime(data){
      let sec = this.time - data
      let hh = Math.floor(sec / 1000 / 60 / 60);
      if(hh > 24){
        return `${Math.floor(hh/24)} days`
      }else return `${hh} h`
    }
}

export default IndividualCamp_info