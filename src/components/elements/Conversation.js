import React from 'react';
import io from 'socket.io-client';
import { API_HOST } from '../../config';
import api from '../../api';
//import './Conversation.css';

export default class Conversation extends React.Component {
  constructor (props) {
    super(props)
    this.state = { messages: [] }
  }

  componentDidMount () {
    this.socket = io(API_HOST)
    console.log(">>>>>>>>>>>>>>>>>");
    this.socket.on('message', message => {
      console.log(">>>>>>>>>>>>>>>>>", message);
      if ( parseInt(message.projectId) ===  parseInt(this.props.projectId) ) {
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
      'from': this.props.userId
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
      return <li key={index}><b>{message.from}:</b>{message.text} {img}</li>
    })
    return (
      <div>
        <input type='text' placeholder='Contribute...' onKeyUp={this.handleSubmit} />
        {messages}
      </div>
    )
  }
}
