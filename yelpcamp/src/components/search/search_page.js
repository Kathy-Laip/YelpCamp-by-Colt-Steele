import React, { Component } from 'react'
import SearchCards from './search_page_cards'
import SearchFooter from './search_page_footer'
import SearchPageHeader from './search_page_header'
import SearchSearch from './search_page_search'

export class SearchPage extends Component {
  render() {
    return (
      <div className='searchPage'>
        <SearchPageHeader/>
        <SearchSearch/>
        <SearchCards/>
        <SearchFooter/>
      </div>
    )
  }
}

export default SearchPage