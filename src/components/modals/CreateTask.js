import React, {Component} from 'react';
import './CreateTask.css';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="task-card">
          <h2>{ title }</h2>
          <p>{ description }</p>
          <p>{ deadline }</p>
      </div>

    );
  }

}

//create project or task input (take form from dashboardly but change to be more fitting)
