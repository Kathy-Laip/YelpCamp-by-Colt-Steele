import React, { Component } from 'react'
import SearchFooter from '../search/search_page_footer'
import SearchPageHeader from '../search/search_page_header'
import AddNewCommentCard from './addNewComment_card'

export class AddnewComment extends Component {
  render() {
    return (
      <div className='mainAddNewComment'>
        <SearchPageHeader user={this.props.user}/>
        <AddNewCommentCard addComment={this.props.addComment}/>
        <SearchFooter/>
      </div>
    )
  }
}

export default AddnewComment