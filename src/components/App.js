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
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import {cyan500,pink100} from 'material-ui/styles/colors';


// const muiTheme = getMuiTheme({
//   palette: {
//     primary1Color:pink100,
//     textColor: cyan500,
//     backgroundColor: cyan500,
//   },
//
// });


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logged: true,
      // isMenuOpen: false
     }
  }

  closeMenu = () => this.setState({ isMenuOpen: false })
  _logOut = () => {
    auth.logout()
    history.push(`/login`)
  }
  _signUp = () => {
    history.push(`/signup`)
  }

  render() {
    let {isMenuOpen} = this.state
    return (
      <MuiThemeProvider>
        <div className="App row">
          <AppBar title="MiddleWhere"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementRight={auth.isLoggedIn() ?
              <FlatButton label= "Logout" onClick={this._logOut}/> : <FlatButton label= "Signup" onClick={this._signUp}/>}
          />
              {//
              // <i className="fa fa-bars fa-2x menu-icon"
              //   onClick={()=>this.setState({ isMenuOpen: !isMenuOpen })}
              // />
              // <Link to="/" className="App-navbar__title"></Link>
                //<Menu show={isMenuOpen} closeMenu={this.closeMenu}/>
            }

          {this.props.children}
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
