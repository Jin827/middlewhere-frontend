import React, {Component} from 'react';
import './CreateProject.css';
import {browserHistory as history} from 'react-router';
import api from '../../api';

///THIS NEEDS  TO BE IMPLEMENTED
export default class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleClick = (e) => {
    this._fetchData()
    }

  _fetchData = () =>{
    if(this.refs.title.value){
      // console.log('Edit Projects 19 ',this.refs.title.value, this.props.id);

      api.editProjects(
        this.props.id,
        this.refs.title.value,
        this.refs.description.value,
        this.refs.deadline.value,
        localStorage.token)
      .then(res => {
        console.log('ARRRIVA ');
        this.props.onCreate; // need to redirect
        // history.push(`/projects/...`
      })
      .catch(console.log("I AM NOT WORKING"));
    }
    else {
      console.error("Must have a title, description, deadline")
      this.setState({error:"Must have a title and description"})
    }
  }

  render(){
    //{this.state.inputValue.length}/80
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
        </form>
        {/* <h3>{this.state.error}</h3> */}
        <button type="submit" onClick={(e) => this._handleClick(e)}>Edit</button>
    </div>
    );
  }

}
