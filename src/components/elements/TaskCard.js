import React, {Component} from 'react';
import EditButton from './EditButton';
import EditTask from '../modals/EditTask';
import CompleteButton from '../elements/CompleteButton';
import auth from '../../auth';
import api from '../../api';
import './TaskCard.css';

export default class TaskCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTask:false,
      completed: 1
    };
  }

  _handleClick = () => {
    this.fetchData()
  }

  // fetchData = () => {
  //   var taskId = this.props.id
  //   // var assigneeId = this.props.userId
  //   // api.assignTask(taskId, assigneeId)
  //   // .then(res => {
  //   //   console.log(res)
  //   // })
  // }

  _completedTask = () => {
    console.log("TaskCard 32 ...", this.props.id, this.state.completed);

    if (!this.state.completed) {
      this.setState({
        completed: 1
      })
    } else {
      this.setState({
        completed: 0
      })
    }

    api.completedTasks(this.props.id, this.state.completed, localStorage.token).then(console.log)
  }

  _editTaskForm = () =>{
      this.setState({
        editTask: true
      })
    }

  render() {
    let { id, title, description, deadline, priority} = this.props
    return (
        <div>
          <h2 className="task-card">{ title }</h2>
          <div className="info">
            <p>{ description }</p>
            <p className="deadline">deadline  { deadline }</p>
            <p>priority{ priority }</p>

            <input type="text" ref="assignee"/>
            <button>search</button>
          </div>
          <br/>
          <CompleteButton completeButtonClick={this._completedTask}/>
          <br/>
          {this.props.isAdmin ?  <EditButton editButtonClick={this._editTaskForm} /> : null}
          {this.state.editTask ? <EditTask id={id} title={title}
          description={description} deadline={deadline} priority={priority} /> : null}
        </div>
    );
  }

}
