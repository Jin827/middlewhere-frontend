import React, {Component} from 'react';
// import auth from '../../auth'
import './SignUp.css';
import api from "../../api";
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';

const ENTER = 13;

const style = {
  margin: '5% 30%',
  textAlign: 'center',
};


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {error:false};
  }

  _handleTyping = (e) => {
    // if (this.state && this.state.error) {
    //   this.setState({ error: null})
    }
    if (e.keyCode===ENTER) {
      this._handleSignup()
    }
  }

  _handleSignup = (e) => {
    e.preventDefault();
    api.requestSignup(this.refs.firstName.getValue(), this.refs.lastName.getValue(), this.refs.email.getValue(), this.refs.password.getValue())
    .then(res => {
      if(this.refs.firstName.getValue() && this.refs.lastName.getValue() && this.refs.email.getValue() && this.refs.password.getValue()){
        this.props.router.push('/login')
      }
    })
    .catch(
      this.setState({error:"Please put in a valid email or password(12 characters)"})
    )

  }

  render() {
    return (
      <div className="signup row">
        <Paper style={style} className="col-large-6 paper-frame" zDepth={2}>
            <TextField className="col-large-6" floatingLabelText="First Name" ref="firstName" maxLength="100" onKeyUp={this._handleTyping}/>
            <TextField className="col-large-6" floatingLabelText="Last Name" ref="lastName" maxLength="100" onKeyUp={this._handleTyping}/>
            <TextField className="col-large-6" floatingLabelText="Email" ref="email" maxLength="254" onKeyUp={this._handleTyping}/>
            <TextField className="col-large-6" floatingLabelText="Password" ref="password" type="password" onKeyUp={this._handleTyping}/>
            <br/>
          <RaisedButton className="button-pad" label="SignUp" secondary={true} onClick={this._handleSignup}/>
          {this.state.error? <h3>{this.state.error}</h3> : null}
        </Paper>

      </div>


    );
  }

}
