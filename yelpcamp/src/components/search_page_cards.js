import React, { Component } from 'react'
import mountCamp from '../Assets/Camp Images/Compressed Images/Mount\ Ulap.jpg'
import calaguasCamp from '../Assets/Camp Images/Compressed Images/Calaguas\ Island.jpg'
import onayCamp from '../Assets/Camp Images/Compressed Images/Onay\ Beach.jpg'
import sevenSisterCamp from '../Assets/Camp Images/Compressed Images/Seven\ Sisters\ Waterfall.jpg'
import latikCamp from '../Assets/Camp Images/Compressed Images/Latik\ Riverside.jpg'
import buloyCamp from '../Assets/Camp Images/Compressed Images/Buloy\ Springs.jpg'

export class SearchCards extends Component {
  render() {
    return (
      <div className='campCards'>
        <div className='card'>
            <div className='imageCard'>
                <img src={mountCamp}/>
            </div>
            <p style={{color: 'black', fontWeight: '700'}}>Mount Ulap</p>
            <p>One of the most famous hikes in Benguest is Mt Ukap in Itogon.</p>
            <button className='whiteBtn' style={{width: '100%'}}><p style={{color: 'black', fontWeight: '700'}}>View Campground</p></button>
        </div>
        <div className='card'>
            <div className='imageCard'>
                <img src={calaguasCamp}/>
            </div>
            <p style={{color: 'black', fontWeight: '700'}}>Calaguas Islands</p>
            <p>A paradise of Islands that can rival the white sand beauty of Boracay.</p>
            <button className='whiteBtn' style={{width: '100%'}}><p style={{color: 'black', fontWeight: '700'}}>View Campground</p></button>
        </div>
        <div className='card'>
            <div className='imageCard'>
                <img src={onayCamp}/>
            </div>
            <p style={{color: 'black', fontWeight: '700'}}>Onay Beach</p>
            <p>This is one of the best beach camping sites, beautiful and pristine.</p>
            <button className='whiteBtn' style={{width: '100%'}}><p style={{color: 'black', fontWeight: '700'}}>View Campground</p></button>
        </div>
        <div className='card'>
            <div className='imageCard'>
                <img src={sevenSisterCamp}/>
            </div>
            <p style={{color: 'black', fontWeight: '700'}}>The Seven Sisters Waterfall</p>
            <p>The Seven Sisters is the 38th tallest waterfall in Norway.</p>
            <button className='whiteBtn' style={{width: '100%'}}><p style={{color: 'black', fontWeight: '700'}}>View Campground</p></button>
        </div>
        <div className='card'>
            <div className='imageCard'>
                <img src={latikCamp}/>
            </div>
            <p style={{color: 'black', fontWeight: '700'}}>Latik Riverside</p>
            <p>Philippines is one if the most dazzling countries in all of Asia.</p>
            <button className='whiteBtn' style={{width: '100%'}}><p style={{color: 'black', fontWeight: '700'}}>View Campground</p></button>
        </div>
        <div className='card'>
            <div className='imageCard'>
                <img src={buloyCamp}/>
            </div>
            <p style={{color: 'black', fontWeight: '700'}}>Buloy Springs</p>
            <p>This is one of the best beach camping sites, beautiful and pristine.</p>
            <button className='whiteBtn' style={{width: '100%'}}><p style={{color: 'black', fontWeight: '700'}}>View Campground</p></button>
        </div>
      </div>
    )
  }
}

export default SearchCards