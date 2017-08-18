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
      inputValue:'',
    };
  }

  handleInput = (e) => {
    e.preventDefault()
    this.setState({
      inputValue:e.target.value
    })
  }

  handleClose = () => {
    this.setState({open: false});
  };


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
    api.createProjects(this.refs.title.getValue(),this.state.date ? this.state.date.toISOString().substring(0,10) : '', this.refs.description.getValue(), localStorage.token)
    .then (res => {
      this.props.onCreate()

    })
  }

  render(){
    const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={this.props.closeState}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onClick={(e) => this._handleClick(e)}
    />,
  ];

    return (
      <div className="createNewProject">
        <Dialog
         title="Dialog With Actions"
         actions={actions}
         modal={false}
         open={this.props.openState}
         onRequestClose={this.props.closeState}
       >
          <TextField floatingLabelText="Title: " type="text" ref="title" maxLength='100'/>

          <DatePicker hintText="Deadline" mode="landscape" ref="deadline" onChange={(e,date) => this._handleChange(e, date)}/>

          <TextField floatingLabelText="Description: " type="text" ref="description" maxLength="500" onInput={e => this.handleInput(e)} value={this.state.inputValue}/>
          {140 - this.state.inputValue.length}

          </Dialog>
      </div>
    );
  }

}
