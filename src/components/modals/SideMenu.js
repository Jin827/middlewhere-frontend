import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.menuState}
          onRequestChange={this.props.closeState}>
          <MenuItem onClick={this.props.closeState}>Item 1</MenuItem>
          <MenuItem onClick={this.props.closeState}>Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
