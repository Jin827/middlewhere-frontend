import React, {Component} from 'react';
// import api from '../../api';
import TaskCard from '../elements/TaskCard';
import CreateTask from '../modals/CreateTask';
import auth from '../../auth';
import AddButton from '../elements/AddButton';
import './Project.css';


export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.fetchBoardData()
  }

  fetchBoardData = () => {
      fetch('https://private-a5484-middlewhere.apiary-mock.com/projects/id/tasks')
      .then(res=> res.json())
      .then(res => {
        console.log(res)
        let resultTasks = res.tasks

        this.setState({
          tasks: resultTasks
      })
        })
      .catch(console.error)

  }

  _createTaskForm = () =>{
    this.setState({
      createTask: true

    })
  }

  render() {
    let { tasks } = this.state;

    if(!tasks) {
      return (
        <div>
          <h1> LOADING tasks </h1>
        </div>
      )
    }

    return (
      <div className="tasks">
        <h1>Project.js</h1>
         { tasks.map(b =>
          <TaskCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            deadline={b.deadline}
            priority={b.priority}
          />
        )}


        {auth.isLoggedIn() ?  <AddButton addButtonClick={this._createTaskForm} /> : null}
        {this.state.createTask ? <CreateTask taskId= {this.props.params.id}/> : null}

      </div>
    );
  }

}
