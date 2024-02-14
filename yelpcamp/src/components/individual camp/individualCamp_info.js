import React, { Component } from 'react'
import map from '../../Assets/Map.png'
import chat from '../../Assets/Chat\ Bubble.svg'
import IndividualCamp_infoCard from './individualCamp_infoCard'
import { Link } from 'react-router-dom'


export class IndividualCamp_info extends Component {
    constructor(props){
      super(props)
      this.time = new Date()
      this.getTime = this.getTime.bind(this)
    }
    render() {
      const hist = this.props.objIndCamp[0].his
      let componentHist
      if(hist.length > 0){
        componentHist = this.props.objIndCamp[0].his.map(el => (<div className='blockComm'>
                <div className='commBlock'>
                  <p style={{color: 'black', fontWeight: '700', width: '50%', float: 'left'}}>{el.name}</p>
                  <p style={{width: '50%', float:'right', textAlign:'right'}}>{
                    this.getTime(el.time)
                    } ago</p>
                </div>
                <p>{el.text}</p>
                <hr style={{height: '1px', backgroundColor: 'gray'}}/>
              </div>))
      } else{
        componentHist = <p style={{ color: 'black', fontWeight: '700', width: '100%', float: 'left'}}>Add your comment first!</p>
      }
      
      return (
        <div className='infoIndCamp'>
        {console.log(this.props.objIndCamp)}
          <div className='mapCamp'>
            <img src={map}/>
          </div>
          <div className='infoMainCamp'>
            <div className='descCamp'>
                <IndividualCamp_infoCard infoCard={this.props.objIndCamp}/>
            </div>
            <div className='chatIndCamp'>
              {componentHist}
              <button className='btn' id='addNewComment'><Link  className='btnLink' to='/newComment'><img src={chat} style={{display: 'inline'}}></img><p style={{ color: 'white', fontSize: '1.5rem'}}>Leave a Review</p></Link></button>
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