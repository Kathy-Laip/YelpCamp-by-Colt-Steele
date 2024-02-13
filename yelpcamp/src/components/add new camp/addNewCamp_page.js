import React, { Component } from 'react'
import SearchFooter from '../search/search_page_footer'
import SearchPageHeader from '../search/search_page_header'
import CardOfCamp from './addNewCamp_cardOfCamp'

export class AddNewCamp extends Component {
  render() {
    return (
      <div className='addNewCampPage'>
        <SearchPageHeader/>
        <CardOfCamp addCamp={this.props.addCamp}/>
        <SearchFooter/>
      </div>
    )
  }
}

export default AddNewCamp