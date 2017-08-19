import React, {Component} from 'react';
import './CreateProject.css';
import {browserHistory as history} from 'react-router';
import api from '../../api';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';


export default class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      inputValue:''
    };
  }

  handleInput = (e) => {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClose = () => {
      this.props.closeForm()
  }

  _handleClick = (e) => {
    e.preventDefault()
    this._fetchData()
    }

  _handleChange = (e, date) => {
    this.setState({date: date})
  }


  _fetchData = () =>{
    if(this.refs.title.getValue()){
      api.editProjects(
        this.props.id,
        this.refs.title.getValue(),
        this.refs.description.getValue(),
        this.state.date ?
          this.state.date.toISOString().substring(0, 10) : '',
        localStorage.token)
      .then(res => {
        this.props.closeForm();
      })
      .catch(error => console.log(error));
    }
    else {
      console.error("Must have a title, description, deadline")
      this.setState({error:"Must have a title and description"})
    }
  }

  render(){
        console.log(this.props.description)
    const actions = [
      < FlatButton label = "Cancel" primary = {true}
      onClick = {this.handleClose} />,
      < FlatButton label = "Submit" primary = {true} keyboardFocused = {true}
      onClick = {(e) => this._handleClick(e)} />
    ];
    return (
      <div>
          <Dialog title="Edit Project"
          actions={actions} modal={false} open={this.props.openState} onRequestClose={this.handleClose} >
            <TextField floatingLabelText="Title: " defaultValue={this.props.title} type="text" ref="title" maxLength='100'/>
            <DatePicker hintText="Deadline" mode="landscape" ref="deadline" onChange={(e, date) => this._handleChange(e, date)}/>
            <TextField floatingLabelText="Description: " defaultValue={this.props.description} type="text" ref="description" maxLength="500" onInput={e => this.handleInput(e)} value={this.state.inputValue}/>

        </Dialog>
      </div>

    );
  }

}

// <Dialog
//   title="Dialog With Actions"
//   actions={actions}
//   modal={false}
//   open={this.props.openState}
//   onRequestClose={this.props.closeState}>
//  {{this.state.error}}
