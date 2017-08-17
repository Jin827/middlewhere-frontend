import React, {Component} from 'react';
import './CreateTask.css';
import api from '../../api';
import {browserHistory as history} from 'react-router';

export default class CreateBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    };
  }

  _handleClick = (e) => {
    console.log('CrTask.js ... CLICKING');
    this._fetchData()
  }

  _handleInput = (e) => {
    console.log('CrTask.js HANDLING INPUT');
    e.preventDefault()
    if (e.target.value.length <= 80){
      this.setState({
        inputValue:e.target.value
      })
    }
    console.log('CrTask.js ' , this.state);
  }

  _fetchData = () => {
    console.log('CreateT ' , this.props.projectId, this.refs.title.value, this.refs.description.value, this.refs.deadline.value, this.refs.priority.value);
    api.createTasks(this.props.projectId, this.refs.title.value, this.refs.description.value, this.refs.deadline.value, this.refs.priority.value)
    .then(data => {
      console.log('20 CreateTask.js' , data);
      JSON.parse(data)
      history.push(`/projects/${this.props.projectId}`)
    })
  }

  render() {
    return (
      <div>
        <form>
          TITLE: <input type="text" ref="title"/>
          <hr/>
          DESCRIPTION: <input type="text" ref="description"  value={this.state.inputValue} onInput={(e)=>this._handleInput(e)}/>
          {80-this.state.inputValue.length}
          <hr/>
          PRIORITY: <input type="text" ref="priority"/>
          <hr/>
          DEADLINE: <input type="text" ref="deadline"/>
          <button type="submit" onClick={(e) => this._handleClick(e)}>Create</button>
        </form>

      </div>
    );
  }

}
