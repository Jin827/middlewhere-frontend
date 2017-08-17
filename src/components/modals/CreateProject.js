import React, {Component} from 'react';
import './CreateProject.css';
import api from '../../api'
import {browserHistory as history} from 'react-router';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';

export default class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    };
  }

  handleInput = (e) => {
    e.preventDefault()
    this.setState({
      inputValue:e.target.value
    })
  }

  _handleClick = (e) => {
    e.preventDefault()
    this._fetchData()
    }

  _handleChange = (e, date) => {
    this.setState ({
      date:date
    })
}


//put required title
  _fetchData = () =>{
    console.log(this.state.date, "val")
    api.createProjects(this.refs.title.getValue(), this.state.date.toISOString().substring(0,10), this.refs.description.getValue(), localStorage.token)
    .then (res => {
      var solving = JSON.parse(res.text)
      // console.log(solving[0].id)
      history.push(`/projects/${solving[0].id}`)
    })
  }

  render(){
    return (
      <div className="createNewProject">
          <TextField floatingLabelText="Title: " type="text" ref="title" maxLength='100'/>
          <DatePicker hintText="Deadline" mode="landscape" ref="deadline" onChange={(e,date) => this._handleChange(e, date)}/>
          <TextField floatingLabelText="Description: " type="text" ref="description" maxLength="500" onInput={e => this.handleInput(e)} value={this.state.inputValue}/>
          {140 - this.state.inputValue.length}
          <FlatButton label="Submit" secondary={true} onClick={(e) => this._handleClick(e)} />

      </div>
    );
  }

}
