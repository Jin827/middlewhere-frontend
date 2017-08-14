import React, {Component} from 'react';
import './TaskCard.css';

export default class TaskCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { id, title, description, deadline } = this.props
    return (
        
        <div> 
          <h2 className="task-card">{ title }</h2>
          <div className="info">
            <p>description: { description }</p>
            <p className="deadline">deadline: { deadline }</p>
          </div>
          <br/>
        </div>
    );
  }

}
