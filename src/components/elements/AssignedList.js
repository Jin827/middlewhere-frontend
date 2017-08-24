import React, {Component} from 'react';
import {Card, CardHeader, CardText, CardActions, LinearProgress} from 'material-ui';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import './TaskCard.css';
import '../App.css';

export default class AssignedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { id, firstName, lastName, email, avatarUrl } = this.props


    return (
      <div className="col-small-3 task-assigned-text">
        <Avatar src={`${avatarUrl}`} />
        <CardText style={{fontSize:"0.6rem", padding:"0.5rem"}}>{firstName}</CardText>
      </div>
    );

  }

}
// {this.props.isAdmin ? <FlatButton primary={true} icon={<EditorModeEdit/>} onClick={this._editProjectForm}/> :null}
