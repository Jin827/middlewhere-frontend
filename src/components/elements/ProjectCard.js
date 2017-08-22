import React, {Component} from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import EditProject from '../modals/EditProject'
import {Card, CardHeader, CardText, CardActions, LinearProgress} from 'material-ui';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './ProjectCard.css';
import '../App.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
<<<<<<< HEAD
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
      console.log('i mount')
      this._fetchAvatar()
    }

    _editProjectForm = () =>{
        this.setState({
          editProject: true
        })
    }

    _fetchAvatar = () => {
      console.log(this.props.projectAdmin, "admin")
      api.getUserAvatar(this.props.projectAdmin)
      .then((data)=>{
        this.setState({
          avatarUrl:data.body.avatarUrl
        })
      })

    }


    _handleFormSubmitted = () => {
      this.setState({editProject:false});
      this.props.editProject()
    }

  render() {
    //console.log(this.props.projectAdmin)
    let { id, progress, title, deadline, description } = this.props
    if(deadline){
      var time = moment(deadline).format("DD-MM-YYYY")
    }
    return (
      <div>
            <Card className='project-card'>
              <CardActions>{this.props.isAdmin ? <EditorModeEdit cursor="pointer" color={cyan500} className="editButton" onClick={this._editProjectForm}/>:null}</CardActions>
              <Link to={`/projects/${id}`}>
                <CardText>Admin:</CardText>
                <Avatar src={`${this.state.avatarUrl}`}/>
                <CardHeader textStyle={{ paddingRight: 0}} title={title} />
                <CardText>{time}</CardText>
                <CardText>{description}</CardText>
              </Link>
              <CardActions>
               {this.props.isAdmin ? <FloatingActionButton mini={true} zDepth={0} backgroundColor="#64b5f6" onClick={this._editProjectForm}><EditorModeEdit/></FloatingActionButton> :null}
             </CardActions>
              <LinearProgress mode="determinate" value={progress} />
            </Card>

          {this.state.editProject ? <EditProject id={id} title={title}
          description={description} deadline={deadline} closeForm={this._handleFormSubmitted}/> : null}
      </div>
    );

  }

}
// {this.props.isAdmin ? <FlatButton primary={true} icon={<EditorModeEdit/>} onClick={this._editProjectForm}/> :null}
