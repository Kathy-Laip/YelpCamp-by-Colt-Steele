import React, { Component } from 'react'
import SearchPageHeader from './search_page_header'

export class SearchPage extends Component {
  render() {
    return (
      <div className='searchPage'>
        <SearchPageHeader/>
      </div>
    )
  }
}

export default SearchPage