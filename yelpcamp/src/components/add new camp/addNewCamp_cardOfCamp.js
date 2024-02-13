import React, { Component } from 'react'

export class CardOfCamp extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      cost: '',
      link: '',
      text: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.checkRules = this.checkRules.bind(this)
  }

  handleChange(event){
    console.log(event.target.id)
    if(event.target.id === 'name'){
      this.setState({name: event.target.value})
    }
    if(event.target.id === 'cost'){
      this.setState({cost: event.target.value})
    }
    if(event.target.id === 'link'){
      this.setState({link: event.target.value})
    }
    if(event.target.id === 'textCard'){
      this.setState({text: event.target.value})
    }
  }

  checkRules(info){
    let ans = this.props.addCamp(info)
    if(ans === 'emptyField' || ans === 'errorName' || ans === 'errorCost' || ans === 'errorLink') alert(ans)
    else alert('Ваш лагерь успешно добавлен!')
  }

  render() {
    return (
      <div className='cardOfCamp'>
        <h2>Add New Campground</h2>
        <p>Campground Name</p>
        <input id='name' placeholder='Enter name of your campground' value={this.state.name} onChange={this.handleChange}></input>
        <p>Price</p>
        <input id='cost' placeholder='Cost' value={this.state.cost} onChange={this.handleChange}></input>
        <p>Image</p>
        <input id='link' placeholder='www.example.html' value={this.state.link} onChange={this.handleChange}></input>
        <p>Description</p>
        <textarea type='text' id='textCard' placeholder='Enter information about your campgrounds for users.' value={this.state.text} onChange={this.handleChange}></textarea>
        <button className='btn campBtn' onClick={() => this.checkRules(this.state)}><p>Add Campground</p></button>
      </div>
    )
  }
}

export default CardOfCamp