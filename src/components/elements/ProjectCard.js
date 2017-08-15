import React, {Component} from 'react';
import { Link } from 'react-router';
import '../App.css';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { progress, title, id } = this.props
    return (
      <div className="project col-small-4">
        <div className="project-card">
        <Link to={`/projects/${id}`}>
          <div className="project-card-text">
            <h1>{ progress }%</h1>
            <h2>{ title }</h2>
          </div>
        </Link>
        </div>
      </div>
    );
  }

}
