import React, {Component} from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import EditProject from '../modals/EditProject'
import {Card, CardHeader, CardText, CardActions, LinearProgress} from 'material-ui';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './ProjectCard.css';
import '../App.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';

// import EditButton from './EditButton';
// import EditProject from '../modals/EditProject'

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
  }

    _editProjectForm = () =>{
        this.setState({
          editProject: true
        })
    }

    _handleFormSubmitted = () => {
      this.setState({editProject:false});
      this.props.editProject();
    }

  render() {
    let { id, progress, title, deadline, description } = this.props
    if(deadline){
      var time = moment(deadline).format("DD-MM-YYYY")
    }
    return (
      <div>
            <Card className='project-card'>
              <Link to={`/projects/${id}`}>
                <CardHeader textStyle={{ paddingRight: 0}} title={title} />
                <CardText>{time}</CardText>
                <CardText>{description}</CardText>
              </Link>
              <CardActions>
               {this.props.isAdmin ? <FloatingActionButton mini={true} zDepth={0} onClick={this._editProjectForm}><EditorModeEdit/></FloatingActionButton> :null}
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
