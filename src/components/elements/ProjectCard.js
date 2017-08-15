import React, {Component} from 'react';
import { Link } from 'react-router';
import '../App.css';
import {Card, CardHeader, CardText, LinearProgress} from 'material-ui';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { progress, title, description, id } = this.props
    return (
      <Card className='project-card'>
        <CardHeader title={title} />
        <CardText>{description}</CardText>
        <LinearProgress mode="determinate" value={progress} />
      </Card>
    );
  }

}
