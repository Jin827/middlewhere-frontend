import React, {Component} from 'react';
import {Card, CardHeader, CardText, CardActions, LinearProgress} from 'material-ui';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import './ProjectCard.css';
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
      <div>
        <ListItem
          disabled={true}
          insetChildren={true}
          leftAvatar={
            <Avatar src={`${avatarUrl}`} />
          }

        >

        </ListItem>


      </div>
    );

  }

}
// {this.props.isAdmin ? <FlatButton primary={true} icon={<EditorModeEdit/>} onClick={this._editProjectForm}/> :null}
