import React, {Component} from 'react';
import auth from '../../auth'
import './Login.css';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';


const ENTER = 13;

const style = {
  margin: '5% 30%',
  textAlign: 'center',
  display: 'inline-block',
};

export default class Login extends Component {

  _handleLogin = () => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
    let email = this.refs.email.getValue()
    let password = this.refs.password.getValue()

    if (email && password) {
      auth.login(email, password)
      .then(res => {
        this.props.router.push('/')})
      .catch(console.error)
    }
    else {
      this.setState({ error: "Please enter an email and password"})
    }
  }

  _handleTyping = (e) => {
    if (this.state && this.state.error) {
      this.setState({ error: null })
    }
    if (e.keyCode===ENTER) {
      this._handleLogin()
    }
  }

  render() {
    return (
      <div className="signup row">
        <Paper style={style} className="col-large-6 big" zDepth={2}>
          <div className="centered">
            <TextField className="small col-large-6" floatingLabelText="Email" ref="email" maxLength="254" onKeyUp={this._handleTyping}/>
            <TextField className="small col-large-6" floatingLabelText="Password" ref="password" type="password" onKeyUp={this._handleTyping}/>
          </div>
            <RaisedButton label="Let's Go" secondary={true} onClick={this._handleLogin}/>
            <h3>Please enter a valid email and password.</h3>
        </Paper>

      </div>

    );
  }

}
