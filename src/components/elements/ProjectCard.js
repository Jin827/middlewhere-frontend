import React, {Component} from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import auth from '../../auth';
import EditButton from './EditButton';
import EditProject from '../modals/EditProject'
import {Card, CardHeader, CardText, LinearProgress} from 'material-ui';
import './ProjectCard.css';
import '../App.css';

// import EditButton from './EditButton';
// import EditProject from '../modals/EditProject'

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editProject:false
    };

  }

  _editProjectForm = () =>{
      this.setState({
        editProject: true
      })
  }
  //
  // _callFetchData = () => {
  //   this.props.onCreate();
  // }

  render() {
    let { id, progress, title, deadline, description } = this.props
    if(deadline){
      var time = moment(deadline).format("DD-MM-YYYY")
    }
    return (
      <div>
          <Link to={`/projects/${id}`}>
            <Card className='project-card'>
              <CardHeader 
                textStyle={{ paddingRight: 0}} 
                title={title} />
              <CardText>{time}</CardText>
              <CardText>{description}</CardText>
              <LinearProgress mode="determinate" value={progress} />
            </Card>
          </Link>
          {this.props.isAdmin ?  <EditButton editButtonClick={this._editProjectForm} /> : null}
          {this.state.editProject ? <EditProject onCreate={this.props.onCreate} id={id} title={title}
          description={description} deadline={deadline} /> : null}
      </div>
    );

  }

}
