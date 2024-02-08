import React, { Component } from 'react'
import SearchPage_Card from './search_page_card'

export class SearchCards extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className='campCards'>
        {this.props.items.map(el => (
            <SearchPage_Card infoCard={el}/>
        ))}
      </div>
    )
  }
}

export default SearchCards