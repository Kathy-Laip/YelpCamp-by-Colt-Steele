import React, { Component } from 'react'

export class AddNewCommentCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      desc: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    console.log(event.target.id)
    if(event.target.id === 'desc'){
      this.setState({desc: event.target.value})
    }
  }


  render() {
    return (
      <div className='cardOfCamp'>
        <h2>Add New Comment</h2>
        <p>Description</p>
        <textarea type='text' id='desc' placeholder='Enter information about your campgrounds for users.' value={this.state.text} onChange={this.handleChange}></textarea>
        <button className='btn campBtn'><p>Post Comment</p></button>
      </div>
    )
  }
}

export default AddNewCommentCard