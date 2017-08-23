import React, {Component} from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import './Me.css';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
// import EditProject from '../modals/EditProject'
// import {Card, CardHeader, CardText, CardActions, LinearProgress} from 'material-ui';
// import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
// import './ProjectCard.css';
// import '../App.css';
// import FloatingActionButton from 'material-ui/FloatingActionButton';

// import EditButton from './EditButton';
// import EditProject from '../modals/EditProject'

export default class Me extends React.Component {

  constructor() {
    super();
    //this.setState = this.setState.bind(this);
    this.state = {
    };
  }

  render() {
    console.log("Me " , this.props);
    return (
      <div className="followers-page">
      <p>Hello {this.props.firstName}</p>
      <Avatar
        src={this.props.avatarUrl}
        icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
      />
        {/* <figure className='user-info'>
          <img
            className='user-info__avatar'
            src={this.props.avatarUrl}
            alt="..."/>
          <figcaption> Hello {this.props.firstName} </figcaption>
        </figure> */}
      </div>)
  }
}
