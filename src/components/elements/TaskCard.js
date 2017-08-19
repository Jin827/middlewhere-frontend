import React, {Component} from 'react';
import EditTask from '../modals/EditTask';
import api from '../../api';
import {Card, CardHeader, CardText, CardActions} from 'material-ui';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import './TaskCard.css';
import './ProjectCard.css';
import '../App.css';

export default class TaskCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTask:false,
      completed: 1,
      open: false,
      dataSource:[]
    };
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    api.getAll()
    .then(res => {
      this.setState({
        dataSource:res.body
      })
    })
    .then(
      console.log(this.state.dataSource, "datasource inside fetchData")
    )
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


  render() {
    const dataSource = this.state.dataSource

    const dataSourceConfig = {
      text: 'firstName',
      value: 'userId'
    };

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
                <AutoComplete
                    floatingLabelText="Team Members"
                    filter={AutoComplete.caseInsensitiveFilter}
                    openOnFocus={false}
                    dataSource={dataSource}
                    dataSourceConfig={dataSourceConfig}
                    maxSearchResults={5}
                    animated={true}
                    onNewRequest={this._handleChange}
                />
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
