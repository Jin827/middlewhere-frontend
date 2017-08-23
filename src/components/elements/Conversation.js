import React from 'react';
import io from 'socket.io-client';
import { API_HOST } from '../../config';
import api from '../../api';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './TaskCard.css';
import './Conversation.css';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


export default class Conversation extends React.Component {
  constructor (props) {
    super(props)
    this.state = { messages: [] }
  }

  componentDidMount () {
    this.socket = io(API_HOST)
    //this.socket = io(`https://69862b10.ngrok.io`) // https://69862b10.ngrok.io   // http://localhost:3000

    this.socket.on('message', message => {
  
      if ( parseInt(message.projectId) ===  parseInt(this.props.projectId) ) {
        console.log('CONVERSATION' , this.state.messages);
        this.setState({ messages: [message, ...this.state.messages] })

      }
    })
    // api.conversationalize('stuff').catch(console.log('AN ERROR'));
    //console.log("Updates ___________________ ");
  }

  handleSubmit = event => {
    const body = {
      'text': event.target.value,
      'projectId': this.props.projectId,
      'from': this.props.username
    }
    if (event.keyCode === 13 && body) {
      const message = {
        body: body.text,
        from: 'Me'
      }
      // this.setState({ messages: [message, ...this.state.messages] })
      this.socket.emit('message', body)
      event.target.value = ''
    }
  }

  render () {
    const messages = this.state.messages.map((message, index) => {
      const img = message.img ? <img src={message.img} width='200px' /> : null
      return <p align="center" key={index}><b>{message.from} : </b>{message.text} {img}</p>
    })
    return (
      <Card className="single-proj col-large-3 col-medium-6 col-small-12">
        <div>
          <input type='text' placeholder='Contribute...' onKeyUp={this.handleSubmit} />
          {messages}
        </div>
      </Card>

    )
  }
}
