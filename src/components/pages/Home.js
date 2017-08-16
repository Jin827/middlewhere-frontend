import React, {Component} from 'react';
import api from '../../api';
import ProjectCard from '../elements/ProjectCard';
import AddButton from '../elements/AddButton';
// import auth from '../../auth';
import CreateProject from '../modals/CreateProject';

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
      <div className="home">
        { projects.map(p =>
          <div>
            <ProjectCard
              key={p.id}
              id={p.id}
              title={p.title}
              progress={p.progressPct}
              description={p.description}
            />
          </div>
        )}
        <AddButton addButtonClick={this._createProjectForm}  />
        {this.state.createProject ? <CreateProject/> : null}
      </div>
    );
  }

}
