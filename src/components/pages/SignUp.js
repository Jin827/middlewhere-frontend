import React, {Component} from 'react';
// import auth from '../../auth'
import './SignUp.css';
import api from "../../api"
import RaisedButton from 'material-ui/RaisedButton';
import {cyan500} from 'material-ui/styles/colors';

const styles = {
  button: {
    margin: 12,
    backgroundColor: 'red',
  },
  exampleImageInput: {

    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleSignup = (e) => {
    e.preventDefault();
    api.requestSignup(this.refs.email.value, this.refs.password.value)
    .then(res => {
      if(this.refs.email.value && this.refs.password.value){
        this.props.router.push('/login')
      }
    })
    .catch(
      this.setState({error:"Please put in a username or password"})
    )

  }

  render() {
    return (
      <div className="signup">
        <input className="auth" type="text" ref="firstName" placeholder="firstName"
          onKeyUp={this._handleTyping}
        />
        <input className="auth" type="text" ref="lastName" placeholder="lastName"
          onKeyUp={this._handleTyping}
        />
        <input className="auth" type="text" ref="email" placeholder="email"
          onKeyUp={this._handleTyping}
        />
        <input className="auth" type="password" ref="password" placeholder="password"
          onKeyUp={this._handleTyping}
        />
        <RaisedButton
           label="Signup"
           labelPosition="before"
           style={styles.button}
           containerElement="label"
           onClick={this._handleSignup}
         >
           <input type="file" style={styles.exampleImageInput} />
        </RaisedButton>
        <h3>{this.state.error}</h3>
      </div>
    );
  }

}
