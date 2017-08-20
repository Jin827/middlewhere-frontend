import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './modals/Menu';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import auth from '../auth';
import FlatButton from 'material-ui/FlatButton';
import {browserHistory as history} from 'react-router';
import SideMenu from './modals/SideMenu'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {orange300,amber600, purple100,pink100,grey500,lightBlue500} from 'material-ui/styles/colors';

//
// const muiTheme = getMuiTheme({
//   palette: {
//
//     primary1Color:lightBlue500,
//     accent1Color:grey500,
//     // textColor: cyan500,
//     // backgroundColor: cyan500,
//   },
//
// });


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logged: true,
      open: false,
     }
  }

  _login = () => {
    auth.login(
    history.push(`/login`)
    )
  }

  _logOut = () => {
    auth.logout()
    history.push(`/login`)
  }

  _signUp = () => {
    history.push(`/signup`)
  }

  

  handleToggle=() => this.setState({open: !this.state.open});

  handleClose=() => this.setState({open: false});

  render() {
    return (
      <MuiThemeProvider >
        <div className="App row">
          <AppBar title="MiddleWhere"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={auth.isLoggedIn() ?
              <FlatButton label= "Logout" onClick={this._logOut}/> : <FlatButton lable="Login" onClick={this._signUp}/><div> / </div><FlatButton label="Signup" onClick={this._signUp}/>}
          />
          {this.state.open ? <SideMenu menuState={this.state.open} closeState={this.handleClose}/> : null}

          {this.props.children}
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
