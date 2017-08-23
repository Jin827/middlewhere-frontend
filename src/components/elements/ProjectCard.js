import React, {Component} from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import EditProject from '../modals/EditProject'
import {Card, CardHeader, CardText, CardActions, CardMedia, CardTitle, LinearProgress} from 'material-ui';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './ProjectCard.css';
import '../App.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import api from '../../api';
import {pinkA200, cyan500} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

import {deepOrange900,orange300} from 'material-ui/styles/colors';

// import EditButton from './EditButton';
// import EditProject from '../modals/EditProject'

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
  }

    componentDidMount() {
      this._fetchAvatar()
      this._fetchTasks()
    }

    _editProjectForm = () =>{
        this.setState({
          editProject: true
        })
    }

    _fetchAvatar = () => {
      api.getUserAvatar(this.props.projectAdmin)
      .then((data)=>{
        this.setState({
          avatarUrl:data.body.avatarUrl
        })
      })
    }

    _fetchTasks = () => {
      api.getTasks(this.props.id)
      .then(res => {
        console.log(res.body, "ressssbitch")
        this.setState({
          taskNum:res.body.length
        })
      })
    }

    _handleFormSubmitted = () => {
      this.setState({editProject:false});
      this.props.editProject()
    }

  render() {
    let editProjectStyle = {
      height: '44px',
      width: '44px',
      color:'rgba(100, 181, 246,0.4)',
      cursor:'pointer'
    }


    let { id, progress, title, deadline, description } = this.props
    if(deadline){
      var time = moment(deadline).format("DD-MM-YYYY")
    }

    return (
      <div>
            <Card className='project-card'>
              <CardActions>
                {this.props.isAdmin ? <EditorModeEdit style={editProjectStyle} className="project-edit-button" onClick={this._editProjectForm}/>:null}
              </CardActions>
              <Link to={`/projects/${id}`}>
              <CardMedia overlayContentStyle={{background: '#000' }}overlay={<CardTitle className="overlay-style" title={title} subtitle={this.state.taskNum >= 0 ? `${this.state.taskNum} Tasks`:`${this.state.taskNum} Task`} />}><div></div></CardMedia>
              <LinearProgress mode="determinate" value={progress} />
              <div className="project-card-relative">
                <Avatar className='project-card-avatar' src={`${this.state.avatarUrl}`}/>
                {deadline ? <CardText><strong>Deadline</strong><br/>{time}</CardText> : <CardText><strong>Deadline</strong><br/>N/A </CardText>}
              </div>

              <div className="project-card-desc">
                <CardText className="desc-width">
                  <strong>Description</strong><br/>{description}
                </CardText>
              </div>

              </Link>
            </Card>

          {this.state.editProject ? <EditProject id={id} title={title}
          description={description} deadline={deadline} closeForm={this._handleFormSubmitted}/> : null}
      </div>
    );

  }

}
