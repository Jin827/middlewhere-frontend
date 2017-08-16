import React, {Component} from 'react';
import {browserHistory as history} from 'react-router';
import api from '../../api';

export default class EditBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    };
  }
  _handleInput = (e) => {
    e.preventDefault()
      this.setState({
        inputValue:e.target.value
      })
  }

  _handleClick = (e) => {
    this._fetchData()
    }

  _fetchData = () =>{
    if(this.refs.title.value || this.refs.description.value || this.refs.deadline.value){
      api.editTasks(this.props.id, this.refs.title.value, this.refs.description.value, this.refs.deadline.value, localStorage.token)
      .then(res => {
          history.push(`/projects/${this.props.id}/tasks`)
      })
    }
    else {
      console.error("Must have a title url, and description")
      this.setState({error:"Must have a title and description"})
    }
  }
  render(){
    return (
      <div>
        <form>
          TITLE: <input type="text" ref="title" maxLength="20"/>
          <hr/>
          DESCRIPTION: <input type="text" ref="description" value={this.state.inputValue} onInput={(e)=>this._handleInput(e)} maxLength="200"/>
          {80-this.state.inputValue.length}
          <hr/>
          DEADLINE: <input type="text" ref="deadline" maxLength="100"/>
          <hr/>
          <button type="submit" onClick={(e) => this._handleClick(e)}>Edit</button>
        </form>
      </div>
    );
  }
}