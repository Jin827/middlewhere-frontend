import React, {Component} from 'react';
import api from '../../api';
import ProjectCard from '../elements/ProjectCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import '../App.css';
import CreateProject from '../modals/CreateProject'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this._fetchBoards();
  }

  _fetchBoards = () => {
    api.getProjectsList()
    .then(data => {
      console.log(data.body.projects[0].id)
      this.setState({
        projects:data.body.projects
      })
    })
  }

  _createProjectForm = () =>{
    this.setState({
      createProject: true
    })
  }

  render() {
    let { projects } = this.state
    if(!projects){
      return (
        <div>
          <h1>Insert projects here</h1>
        </div>
      )
    }

    return (
      <div className="home col-small-12">
        { projects.map(p =>
          <ProjectCard
            key={p.id}
            id={p.id}
            title={p.title}
            progress={p.progressPct}
            description={p.description}
          />
        )}
        <AddButton addButtonClick={this._createProjectForm}  />
        {this.state.createProject ? <CreateProject/> : null}
      </div>
    );
  }

}

// {auth.isLoggedIn() ? <AddButton addButtonClick={this._createBoardForm}  /> : null}
// {this.state.createBoard ? <CreateBoard id={boards}/> : null}
//isAdmin then you can add a project for example
// add delete, assign tasks


// {auth.isLoggedIn() ? <AddButton /> : null}

// .then(data => {
//   console.log(data)
// })
// this.setState({
//   projects: [
//     {id:1,title:"first project", progress: "20%", description:"project about web development"},
//     {id:2,title:"second project",progress:"12%", description:"project about food"},
//     {id:3,title:"third project",progress:"52%", description:"project about sleep"}
//   ]
// })
