import React, {Component} from 'react';
import { Link } from 'react-router';
import '../App.css';
import {Card, CardHeader, CardText, LinearProgress} from 'material-ui';
import './ProjectCard.css';
// import EditButton from './EditButton';
// import EditProject from '../modals/EditProject'

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { progress, title, description, id } = this.props
    return (
      <div>
        <Link to={`/projects/${id}`}>
          <Card className='project-card'>
            <CardHeader textStyle={{ paddingRight: 0}} title={title} />
            <CardText>{description}</CardText>
            <LinearProgress mode="determinate" value={progress} />
          </Card>
        </Link>
      </div>
    );
  }

}
