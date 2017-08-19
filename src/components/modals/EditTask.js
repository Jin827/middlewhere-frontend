import React, {Component} from 'react';
import {browserHistory as history} from 'react-router';
import api from '../../api';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';

export default class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:''
    };
  }

  _handleInput = (e) => {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value
    })
  }

  _handleChange = (e, date) => {
    this.setState({date: date})
  }


  _handleClick = (e) => {
    this._fetchData()
    }

  _handleClose = () => {
      this.props.closeForm()
  }

  _fetchData = () =>{
    if(this.refs.title.getValue()){
        api.editTasks(
        this.props.id,
        this.refs.title.getValue(),
        this.refs.description.getValue(),
        this.state.date ?
          this.state.date.toISOString().substring(0, 10) : '',
        this.refs.priority.getValue(),
        localStorage.token)
      .then(res => {
        console.log("res happened")
        this.props.closeForm();
        //history.push(`/projects/${this.props.id}`)
      })
      .catch(console.log("I AM NOT WORKING, I'm a CATCH in EditTask.js"));
    }
    else {
      console.error("Must have a title, description, deadline")
      this.setState({error:"Must have a title and description"})
    }
  }

  render(){
    const actions = [
      < FlatButton label="Cancel" primary={true}
      onClick={this._handleClose} />,
      < FlatButton label="Submit" primary={true} keyboardFocused={true}
      onClick={(e) => this._handleClick(e)} />
    ];
    //{this.state.inputValue.length}/80\

    return (
      <div className="createNewProject">
        <div>
            <Dialog
              title="Edit Project"
              actions={actions}
              modal={false}
              open={true}
              onRequestClose={this._handleClose} >
              <TextField floatingLabelText="Title: " defaultValue={this.props.title} type="text" ref="title" maxLength='100'/>
              <DatePicker hintText="Deadline" mode="landscape" ref="deadline" onChange={(e, date) => this._handleChange(e, date)}/>
              <TextField floatingLabelText="Description: " defaultValue={this.props.description} type="text" ref="description" maxLength="140" onInput={e => this.handleInput(e)} onChange={this.state.inputValue}/>
              <TextField floatingLabelText="Priority: " defaultValue={this.props.priority} type="text" ref="priority" maxLength='50'/>
            </Dialog>
        </div>
          <button type="submit" onClick={(e) => this._handleClick(e)}>Edit</button>
        {/* <h3>{this.state.error}</h3> */}
    </div>
    );
  }

}
