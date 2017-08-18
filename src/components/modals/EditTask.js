import React, {Component} from 'react';
import {browserHistory as history} from 'react-router';
import api from '../../api';

export default class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleClick = (e) => {
    this._fetchData()
    }

  _fetchData = () =>{
    if(this.refs.title.value){
      // console.log('MUAHHAHAHAHAHA');
        api.editTasks(
        this.props.id,
        this.refs.title.value,
        this.refs.description.value,
        this.refs.deadline.value,
        this.refs.priority.value,
        localStorage.token)
      .then(res => {
        console.log('EditTask 27 ');
        history.push(`/projects/${this.props.id}`)
      })
      .catch(console.log("I AM NOT WORKING, I'm a CATCH in EditTask.js"));
    }
    else {
      console.log( ' +++++++++ _______ +++++++ ');
      console.error("Must have a title, description, deadline")
      this.setState({error:"Must have a title and description"})
    }
  }

  render(){
    //{this.state.inputValue.length}/80\
    console.log(this.props);
    return (
      <div className="createNewProject">
        <form>
          Title: <input defaultValue={this.props.title} maxLength="80" type="text" ref="title"/>
          <hr/>
          Description: <input defaultValue={this.props.description}
            maxLength="80" type="text" ref="description"/>
          <hr/>
          Deadline: <input defaultValue={this.props.deadline}
            maxLength="80" type="text" ref="deadline"/>
          <hr/>
          priority: <input defaultValue={this.props.priority} maxLength="80" type="text" ref="priority"/>
          <hr/>

        </form>
          <button type="submit" onClick={(e) => this._handleClick(e)}>Edit</button>
        {/* <h3>{this.state.error}</h3> */}
    </div>
    );
  }

}
