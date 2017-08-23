import React, {Component} from 'react';
import './CreateProject.css';
import api from '../../api'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';

export default class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleInput = (e) => {
    e.preventDefault()
    this.setState({inputValue: e.target.value})
  }

  handleClose = () => {
    this.setState({open: false});
  };
  //comment out

  _handleClick = (e) => {
    e.preventDefault()
    this._fetchData()
  }

  _handleChange = (e, date) => {
    this.setState({date: date})
  }

  _fetchData = () => {
    if(!this.refs.title.getValue()){
      this.setState({titleError: "Title is required"})
    }
    else(
      api.createProjects(this.refs.title.getValue(), this.state.date? this.state.date.toISOString().substring(0, 10): '', this.refs.description.getValue(), localStorage.token)
      .then(res => {
        this.props.onCreate()
      })
      .catch(error=> console.log(error)) 
    )
  }

  //Clear the error message once you start type in the title before clicking the submit button
  _clearErrorState = () => {
     if(this.refs.title.getValue()){
        this.setState({titleError: ""})
    }
  }

  render() {
    const actions=[ < FlatButton label="Cancel" primary={
        true
      }
      onClick={
        this.props.closeState
      } />, < FlatButton label="Submit" primary={
        true
      }
      keyboardFocused={
        true
      }
      onClick={
        (e) => this._handleClick(e)
      } />
    ];

    return (
      <div className="createNewProject">
        <Dialog 
        title="Create Project"
        paperClassName="dialogPaper"
        actions={actions} modal={false} open={this.props.openState} onRequestClose={this.props.closeState}>
          <TextField floatingLabelText="Title: " type="text" ref="title" maxLength="50" errorText={this.state.titleError} onChange={this._clearErrorState}/>

          <DatePicker hintText="Deadline" mode="landscape" ref="deadline" autoOk={true} onChange={(e, date) => this._handleChange(e, date)}/>

          <TextField floatingLabelText="Description: " type="text" ref="description" multiLine={true} maxLength="140" onInput={e => this.handleInput(e)} value={this.state.inputValue}/> {140 - this.state.inputValue.length}

        </Dialog>
      </div>
    );
  }

}
