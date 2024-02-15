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


  checkADD(){
    let ans = this.props.addComment({text: this.state.desc, time: new Date()})
    if(ans === 'noAcc') alert('Ввойдите в аккаунт!')
    else if(ans === 'emptyComm') alert('Пустое сообщение')
    else alert('Ваш комментарий успешно добавлен!')
  }

  render() {
    return (
      <div className='cardOfCamp'>
        <h2>Add New Comment</h2>
        <p>Description</p>
        <textarea type='text' id='desc' placeholder='Enter information about your campgrounds for users.' value={this.state.text} onChange={this.handleChange}></textarea>
        <button className='btn campBtn' onClick={() => this.checkADD()}><p>Post Comment</p></button>
      </div>
    )
  }
}

export default AddNewCommentCard