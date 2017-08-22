import React, {Component} from 'react';
import api from '../../api';
import TaskCard from '../elements/TaskCard';
import CreateTask from '../modals/CreateTask';
import AddButton from '../elements/AddButton';
import { Link } from 'react-router';
import auth from '../../auth'
import ReturnButton from './ReturnButton'
import './Project.css';
import Conversation from '../elements/Conversation'


export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      open:false,
      isAdmin: false
    };
  }


  componentDidMount() {
    this.fetchData()
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  _handleFormSubmitted = () => {
    this.setState({createTask : false})
  }


  fetchData = () => {
      api.getTasks(this.props.params.id)
      .then(res => {
        let resultTasks = res.body
        this.setState({
          tasks: resultTasks
        })
      })
      .catch(console.error)

      Promise.all([
        api.getProjects(this.props.params.id),
        api.getMe(localStorage.token)
      ])
      .then(data => {
        var project = data[0].body[0];
        var user = data[1].body;
        this.setState({
          isAdmin: user.users_id === project.adminUserId,
          userId: user.users_id
        })
      })

  }

  _createTaskForm = () =>{
    this.setState({
      createTask: true
    })
  }

  render() {
    let { tasks } = this.state;
    return (
      <div className="tasks">
        <Conversation projectId={this.props.params.id} userId={this.state.userId} />
         { tasks ? tasks.map(b =>
           <div className="single-proj col-large-3 col-medium-6 col-small-12">
            <TaskCard
              projectId={this.props.params.id}
              isAdmin={this.state.isAdmin}
              userId={this.state.userId}
              key={b.id}
              id={b.id}
              title={b.title}
              description={b.description}
              deadline={b.deadline}
              priority={b.priority}
              ReRenderProject={this.fetchData}
            />
            </div>
          ) : <h1>Add tasks</h1> }
          {auth.isLoggedIn() ? <Link to={`/projects`}> <ReturnButton /> </Link> : null}
        {this.state.isAdmin?  <AddButton buttonClick={this._createTaskForm} /> : null}
        {this.state.createTask ? <CreateTask onCreate={this.fetchData}
          projectId={this.props.params.id}
          openState={this.handleOpen} closeState={this.handleClose}
          closeForm={this._handleFormSubmitted}/> : null}

      </div>
    );
  }

}
