import React, {Component} from 'react';
import api from '../../api';
import ProjectCard from '../elements/ProjectCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import './Home.css';


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
    this.setState({
      projects: [
        {id:1,title:"first project", progress: "20%", description:"project about web development"},
        {id:2,title:"second project",progress:"12%", description:"project about food"},
        {id:3,title:"third project",progress:"52%", description:"project about sleep"}
      ]
    })
  }

  render() {
    let { projects } = this.state
    return (
      <div className="home">
        <h1>I EXIST</h1>
        { projects.map(p =>
          <ProjectCard
            key={p.id}
            id={p.id}
            title={p.title}
            progress={p.progress}
            description={p.description}
          />
        )}
      </div>
    );
  }

}
//isAdmin then you can add a project for example
// add delete, assign tasks


// {auth.isLoggedIn() ? <AddButton /> : null}
