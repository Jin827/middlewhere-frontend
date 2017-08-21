import React, {Component} from 'react';
import './CreateTask.css';
import api from '../../api';
import {browserHistory as history} from 'react-router';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',

    };
  }

  // _handleClick = (e) => {
  //   e.preventDefault();
  //   this._fetchData()
  // }
  //
  // _handleInput = (e) => {
  //   e.preventDefault()
  //   if (e.target.value.length <= 80){
  //     this.setState({
  //       inputValue:e.target.value
  //     })
  //   }
  // }

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

  _handlePriority = (event, index, value) => this.setState({value});

  _fetchData = () => {
    api.createTasks(
      this.props.projectId,
      this.refs.title.getValue(),
      this.refs.description.getValue(),
      this.state.date ?
        this.state.date.toISOString().substring(0, 10) : '',
      this.state.value)
    .then(data => {
      this.props.onCreate();
    })
    .then(data => {
      console.log('WILL CLOSE TASK FORM');
      this.props.closeState();
    })
    .then(data => {
      this.props.closeForm();
    })
  }

  // render() {
  //   return (
  //     <div>
  //       <form>
  //         TITLE: <input type="text" ref="title"/>
  //         <hr/>
  //         DESCRIPTION: <input type="text" ref="description"  value={this.state.inputValue} onClick={(e)=>this._handleInput(e)}/>
  //         {80-this.state.inputValue.length}
  //         <hr/>
  //         PRIORITY: <input type="text" ref="priority"/>
  //         <hr/>
  //         DEADLINE: <input type="text" ref="deadline"/>
  //       </form>
  //       <button type="submit" onClick={(e) => this._handleClick(e)}>Create</button>
  //     </div>
  //   );
  // }

  render(){
    const actions = [
    <FlatButton
      label="Cancel Task"
      primary={true}
      onClick={this.props.closeForm}
    />,
    <FlatButton
      label="Submit Task"
      primary={true}
      keyboardFocused={true}
      onClick={(e) => this._handleClick(e)}
    />,
  ];

    return (
      <div className="createNewProject">
        <Dialog
         title="Create A Task"
         actions={actions}
         modal={false}
         open={true}
         onRequestClose={this.props.closeForm}
       >
          <TextField floatingLabelText="Title: " type="text" ref="title" maxLength='100'/>

          <DatePicker hintText="Deadline" mode="landscape" ref="deadline" autoOk={true} onChange={(e,date) => this._handleChange(e, date)}/>

          <TextField floatingLabelText="Description: " type="text" ref="description" maxLength="140" onInput={e => this.handleInput(e)} value={this.state.inputValue}/>
          {140 - this.state.inputValue.length}
          <br/>
          <SelectField
              floatingLabelText="Priority"
              onChange={this._handlePriority}
              value={this.state.value}
              autoWidth={true}
            >
              <MenuItem value={null} primaryText="None" />
              <MenuItem value={"low"} primaryText="Low" />
              <MenuItem value={"normal"} primaryText="Normal" />
              <MenuItem value={"high"} primaryText="High" />
            </SelectField>
          </Dialog>
      </div>
    );
  }
}
