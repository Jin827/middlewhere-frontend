import React from 'react';
//import ReactDOM from 'react-dom'
import io from 'socket.io-client';
import { API_HOST } from '../../config';
import api from '../../api';

export default class Conversation extends React.Component {
  constructor (props) {
    super(props)
    this.state = { messages: [] }
  }

  componentDidMount () {
    this.socket = io(`http://localhost:3000`)
    this.socket.on('message', message => {
      console.log(">>>>>>>>>>>>>>>>>", message);
      this.setState({ messages: [message, ...this.state.messages] })
    })
    // api.conversationalize('stuff').catch(console.log('AN ERROR'));
    // console.log("Updates ___________________ ");
  }

  handleSubmit = event => {
    const body = {
      'text': event.target.value,
      'convoid': 5
    }
    if (event.keyCode === 13 && body) {
      const message = {
        body: body.text,
        from: 'Me'
      }
      this.setState({ messages: [message, ...this.state.messages] })
      this.socket.emit('message', body)
      event.target.value = ''
    }
  }

  render () {
    const messages = this.state.messages.map((message, index) => {
      const img = message.img ? <img src={message.img} width='200px' /> : null
      return <li key={index}><b>{message.from}:</b>{message.body} {img}</li>
    })
    return (
      <div>
        <h3>Start a conversation : </h3>
        <input type='text' placeholder='Ask/Answer...' onKeyUp={this.handleSubmit} />
        {messages}
      </div>
    )
  }
}
