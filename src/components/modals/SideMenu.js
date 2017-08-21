import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Me from './Me';
import CoworkerTab from './CoworkerTab'
import api from '../../api';


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
      api.getAll(localStorage.token)
    })
    .then((coworkers) => this.setState({
      coworkers : coworkers.body
    }))
  }

  render() {
    console.log('SideMenu' , this.state);
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.menuState}
          onRequestChange={this.props.closeState}>
          <MenuItem onClick={this.props.closeState}>
            {this.state.me ? <Me firstName={this.state.me.firstName}
              lasteName={this.state.me.lasteName}
              avatarUrl={this.state.me.avatarUrl} /> : null}
          </MenuItem>
            
          { this.state.coworkers ? <CoworkerTab coworkers={this.state.coworkers}/> : null}


          { this.state.coworkers ? this.state.coworkers.map(b =>
            <div className="coworkers">
              <MenuItem>
                <CoworkerTab coworkers={this.state.coworkers}/>
              </MenuItem>
             </div>
           ) : <h4>No Coworkers <br/> to Show </h4> }
        </Drawer>
      </div>
    );
  }
}
