import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Me from './Me';
import CoworkerTab from './CoworkerTab'
import api from '../../api';

import {
blue300,
indigo900,
orange200,
deepOrange300,
pink400,
purple500,
} from 'material-ui/styles/colors';


export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      me: null
    };
  }

  componentDidMount = () => {
    this._fetchData();
  }

  _fetchData = () => {
    api.getMe(localStorage.token)
    .then(yoSoy => {
      this.setState({
        me : yoSoy.body
      })
    })
    .then(() => {
      return api.getAll(localStorage.token)
    })
    .then((coworkers) => {
      console.log(coworkers);
      if (coworkers) {
        this.setState({coworkers : coworkers.body});
      }
    }
  )
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          open={this.props.menuState}
          containerStyle={{
            textAlign: 'center'
          }}
          onRequestChange={this.props.closeState}>
          <MenuItem onClick={this.props.closeState}>
            {this.state.me ? <Me firstName={this.state.me.users_firstName}
              lastName={this.state.me.users_lastName}
              avatarUrl={this.state.me.avatarUrl} /> : null}
          </MenuItem>
          { this.state.coworkers ? <CoworkerTab coworkers={this.state.coworkers} me={this.state.me.users_id}/> : null}
        </Drawer>
      </div>
    );
  }
}