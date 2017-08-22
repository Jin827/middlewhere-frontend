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
import {orange300,amber600, purple100,pink100,grey500,lightBlue500,cyan800,deepOrange900} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {

    primary1Color:"#999",

    accent1Color:orange300,
   textColor: '#000'
  },

});



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
     }
  }



  _login = () => {
    history.push(`login`)
  }

  _logOut = () => {
    auth.logout().then(() => history.push(`/`))
  }

  _signUp = () => {
    history.push(`/signup`)
  }



  handleToggle=() => this.setState({open: !this.state.open});

  handleClose=() => this.setState({open: false});
  render() {
    
    let style = {
      position:'fixed',
      top:0,
    }
    

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App row">
          <AppBar title="MiddleWhere" className="appBar"
            style={style}
            titleStyle={{color:'#000'}}
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={auth.isLoggedIn() ?
               <FlatButton label= "Logout" onClick={this._logOut}/>: <div><FlatButton label= "Login" onClick={this._login}/><FlatButton label="Signup" onClick={this._signUp}/></div> }
          />
          {this.state.open ? <SideMenu menuState={this.state.open} closeState={this.handleClose}/> : null}
          {this.props.children}
          </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
// iconStyleLeft={{color: '#000', fill:'rgb(0,0,0)'}}