import React, {Component} from 'react';
import EditButton from './EditButton';
import EditProject from '../modals/EditProject'
import auth from '../../auth';
import '../App.css';
import {Card, CardHeader, CardText, LinearProgress} from 'material-ui';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    
  _editProjectForm = () =>{
      this.setState({
        editProject: true

      })
    }

  render() {
    let { progress, title, description, deadline } = this.props
    return (
      <Card className='project-card'>
        <CardHeader title={title} />
        <CardText>{description}</CardText>
        <cardText>{deadline}</cardText>
        <LinearProgress mode="determinate" value={progress} />

        
        {auth.props.isAdmin ?  <EditButton editButtonClick={this._editProjectForm} /> : null}  
        {this.state.editProject ? <EditProject /> : null}
           
      </Card>
    )
  }

}
