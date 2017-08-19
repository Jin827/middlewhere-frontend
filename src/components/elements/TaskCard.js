import React, {Component} from 'react';
import EditButton from './EditButton';
import EditTask from '../modals/EditTask';
import CompleteButton from '../elements/CompleteButton';
import auth from '../../auth';
import api from '../../api';
import './TaskCard.css';
import {Card, CardHeader, CardText, CardActions, LinearProgress, FlatButton} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './ProjectCard.css';
import '../App.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';


export default class TaskCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTask:false,
      completed: 1,
      open: false,
    };
  }

  _handleClick = () => {
    this.fetchData()
  }

  fetchData = () => {
    api.getAll
    // var assigneeId = this.props.userId
    // api.assignTask(taskId, assigneeId)
    // .then(res => {
    //   console.log(res)
    // })
  }


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

    _closeTaskForm = () => {
      this.setState({
        editTask:false
      })
        this.props.ReRenderProject();
    }
  // _closeTaskForm = () =>{
  //     this.setState({
  //       editTask: false
  //     })
  //     this.props.ReRenderProject();
  //   }

  render() {
    let { id, title, description, deadline, priority} = this.props
    if(deadline){
      var time = moment(deadline).format("DD-MM-YYYY")
    }
    return (
      <div>
            <Card className="task-card">
                <CardHeader textStyle={{ paddingRight: 0}} title={ title }  actAsExpander={true} showExpandableButton={true}/>
                <CardText expandable={true}>{ time }</CardText>
                <CardText expandable={true}>{ description }</CardText>
                <CardText expandable={true}>{ priority }</CardText>
              <CardActions>
               {this.props.isAdmin ? <FloatingActionButton mini={true} zDepth={0} onClick={this._editTaskForm}><EditorModeEdit/></FloatingActionButton> :null}
               {this.props.isAdmin ? <RaisedButton label="Complete Task" secondary={true} onClick={this._completedTask}/> :null}
             </CardActions>
            </Card>

          {this.state.editTask ? <EditTask projectId={this.props.projectId} id={id} title={title}
          description={description} deadline={deadline} closeForm={this._closeTaskForm}/> : null}
      </div>

    );
  }

}
// <br/>
// <CompleteButton completeButtonClick={this._completedTask}/>
// <br/>

// <div>
//   <h2 className="task-card">{ title }</h2>
//   <div className="info">
//     <p>{ description }</p>
//     <p className="deadline">deadline  { deadline }</p>
//     <p>priority: { priority }</p>
//     <input type="text" ref="assignee"/>
//     <button>search</button>
//   </div>
//   <br/>
//   <CompleteButton completeButtonClick={this._completedTask}/>
//   <br/>
//   {this.props.isAdmin ?  <EditButton editButtonClick={this._editTaskForm} /> : null}
//   {this.state.editTask ? <EditTask id={id} title={title}
//   description={description} deadline={deadline} priority={priority}
//   closeForm={this._closeTaskForm}/> : null}
// </div>
