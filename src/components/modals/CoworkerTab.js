import React, {Component} from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import MenuItem from 'material-ui/MenuItem';
import './Me.css';

import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';


import {
blue300,
indigo900,
orange200,
deepOrange300,
pink400,
purple500,
} from 'material-ui/styles/colors';

export default class Coworkers extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open:false
  //   };
  // }
  //
  //   _editProjectForm = () =>{
  //       this.setState({
  //         editProject: true
  //       })
  //   }
  //
  //   _handleFormSubmitted = () => {
  //     this.setState({editProject:false});
  //     this.props.editProject();
  //   }

  render() {
    let coworkers = this.props.coworkers.filter
                  (coworker => coworker.id!==this.props.me);
    var colorForStatus='black';

    return (
        <div>
          {coworkers.map(coworker => {
            console.log(coworker);
            var colorForStatus='black';
            if (coworker.status=='ONLINE'){
              colorForStatus='green';
            } else {
              colorForStatus='grey';
            }
            return (
              <MenuItem  className="row">
                {/* <figure className='user-info'>
                  <img
                    className='user-info__avatar'
                    src={coworker.avatarUrl}
                    alt="..."/>
                  <figcaption> {coworker.firstName}({coworker.status})</figcaption>
                </figure> */}
                <p style={{color:colorForStatus}}>{coworker.firstName}</p>
                <Avatar
                  src={coworker.avatarUrl} color={deepOrange300}
                  icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
                />
             </MenuItem>
            )
          }

         )}
        </div>
    );

  }

}
