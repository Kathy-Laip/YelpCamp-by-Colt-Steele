import React, { Component } from 'react'
import SearchFooter from '../search/search_page_footer'
import SearchPageHeader from '../search/search_page_header'
import IndividualCamp_info from './individualCamp_info'

export class IndividualCamp_main extends Component {

  render() {
    return (
      <div className='mainIndCamp'>
        <SearchPageHeader/>
        {console.log(this.props.objInd)}
        <IndividualCamp_info objIndCamp={this.props.objInd}/>
        <SearchFooter/>
      </div>
    )
  }
}

export default IndividualCamp_main