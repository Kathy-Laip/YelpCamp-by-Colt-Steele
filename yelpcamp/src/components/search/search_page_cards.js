import React, { Component } from 'react'
import SearchPageCard from './search_page_card'

export class SearchCards extends Component {
  render() {
    return (
      <div className='campCards'>
        {this.props.items.map(el => (
            <SearchPageCard key={el.p} infoCard={el} setCamp={this.props.setCamp}/>
        ))}
      </div>
    )
  }
}

export default SearchCards