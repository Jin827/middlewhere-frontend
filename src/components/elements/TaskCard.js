import React, {Component} from 'react';
import './TaskCard.css';

export default class TaskCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title, description, url } = this.props
    return (
      <a className="task-card" href={url}>
        <div>
          <h2>{ title }</h2>
          <p>{ description }</p>
        </div>
        <img src={""} alt={title}/>
      </a>
    );
  }

}
