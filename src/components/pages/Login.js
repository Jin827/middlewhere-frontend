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
    this.state={
      // email: "",
      // password: "",
      error:false,
      errorText: ""
    };
  }
  

  _handleLogin = () => {
    // deep destructuring equivalent to (let email = this.refs.email.value;)
    let email = this.refs.email.getValue()
    let password = this.refs.password.getValue()
    // if (!email || !password){
    if(!email){
      this.setState({
        error:true,
        emailError:"This field is required"
      })
    }
    else if(!password){
      this.setState({
        error:true,
        passwordError:"This field is required"
      })
    }
    else if(email && password) {
      api.requestLogin(email, password)
      auth.login(email, password)
      .then(() => {
        this.setState({error:false})
        this.props.router.push('/')})
      .catch((error) => 
        this.setState({error:true})
      )
    }
  }

  // _text = (e) => {
  // e.preventDefault()
  //   let email = this.refs.email.getValue()
  //   let password = this.refs.password.getValue()
  //   if (!email || !password){
  //     this.setState({errorText:"This field is required"})
  //   } else {
  //     this.setState({errorText:""})
  //   }
  // } 

  _handleTyping = (e) => {
      if (e.keyCode===ENTER) {
        this._handleLogin()
      }   
  }

  render() {
   
    return (
      <div className="signup row">
        <Paper style={style} className="col-large-6 paper-frame" zDepth={2}>
          
            <TextField className="col-large-6" floatingLabelText="Email" errorText= {this.state.emailError} ref="email" maxLength="254" onKeyUp={this._handleTyping}/>
            <TextField className="col-large-6" floatingLabelText="Password" errorText= {this.state.passwordError} ref="password" type="password" onKeyUp={this._handleTyping}/>
            <br/>
            <RaisedButton className="button-pad" label="Let's Go" secondary={true} onClick={this._handleLogin} />
            {this.state.error? <div>Please enter an valid email and password</div> : null}
          
        </Paper>
        
      </div>

    );
  }

}

