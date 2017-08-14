import React, {Component} from 'react';
import { Link } from 'react-router';
import './ProjectCard.css';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title, description, id } = this.props
    return (
      <Link to={`/projects/${id}`}>
        <div className="project-card">
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>
      </Link>
    );
  }

}
