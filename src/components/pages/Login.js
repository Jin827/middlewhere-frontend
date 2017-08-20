import React, {Component} from 'react';
import auth from '../../auth'
import api from '../../api'
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
  constructor(props) {
    super(props)
    this.state={error:false};
  }
  

  _handleLogin = () => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
    let email = this.refs.email.getValue()
    let password = this.refs.password.getValue()
    if (!email || !password){
      this.setState({error:true})
    }
    else if(email && password) {
      api.requestLogin(email, password)
      auth.login(email, password)
      .then(() => {
        this.props.router.push('/')})
      .catch((error) => 
        this.setState({error:true})
      )
    }
  }

  // _handleTyping = (e) => {
  //     // if ( this.state&&this.state.error) {
  //     //   this.setState({ error: false})
  //     // }
  //     if (e.keyCode===ENTER) {
  //       this._handleLogin()
  //     }  
  // }

  render() {
    return (
      <div className="signup row">
        <Paper style={style} className="col-large-6 paper-frame" zDepth={2}>
            <TextField className="col-large-6" floatingLabelText="Email" ref="email" maxLength="254" onKeyUp={this._handleTyping}/>
            <TextField className="col-large-6" floatingLabelText="Password" ref="password" type="password" onKeyUp={this._handleTyping}/>
            <br/>
            <RaisedButton className="button-pad" label="Let's Go" secondary={true} onClick={this._handleLogin}/>
            {this.state.error? <div>Please enter an valid email and password</div> : null}
        </Paper>
        
      </div>

    );
  }

}

