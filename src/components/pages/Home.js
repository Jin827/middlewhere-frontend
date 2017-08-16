import React, {Component} from 'react';
import api from '../../api';
import ProjectCard from '../elements/ProjectCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import CreateProject from '../modals/CreateProject';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isAdmin: false
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData = () => {
    api.getProjectsList()
    .then(data => {
      this.setState({
        projects:data.body.projects
      })
    })

    Promise.all([
        api.getProjects(this.props.params.id),
        api.getMe(localStorage.token)
      ])
      .then(data => {
        var project = data[0].body;
        var user = data[1].body;


        this.setState({
          isAdmin: user.id === project.ownerId
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
              isAdmin={this.state.isAdmin}
              key={p.id}
              id={p.id}
              title={p.title}
              progress={p.progressPct}
              description={p.description}
            />
          </div>
        )}

        {auth.isLoggedIn() ?  <AddButton addButtonClick={this._createProjectForm}  /> : null}
        {this.state.createProject ? <CreateProject/> : null}
      </div>
    );
  }

}
