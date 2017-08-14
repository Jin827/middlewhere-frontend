import React, {Component} from 'react';
import api from '../../api';
import TaskCard from '../elements/TaskCard';
import auth from '../../auth';
import './Project.css';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.fetchBoardData()
  }

  fetchBoardData = () => {
      // Promise.all([
      //   api.getTasks(this.props.params.id)
        
      // ])
      // .then(res => {
        this.setState({
          tasks: [
            {
              id: 1,
              title: "Make TaskCard",
              description: "middlewhere???? wowowowowowowowowo HYOJIN hyojin jin JIN JIN",
              deadline: "2017-08-30",
              updatedAt: "in secs" 
            },
            {
              id: 2,
              title: "Made it",
              description: "wowowowowowowow",
              deadline: "2017-08-20",
              updatedAt: "in secs" 
            },
            {
              id: 3,
              title: "yayy",
              description: "getting there",
              deadline: "2017-08-14",
              updatedAt: "2017-08-14" 
            }
          ]
          
        })
      // })
      .catch(console.error)
     
  }

  render() {
    let { tasks } = this.state
    return (
      <div className="tasks">
        <h1>where am i?</h1>
         { tasks.map(b =>
          <TaskCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            deadline={b.deadline}
            updatedAt={b.updatedAt}
          />
        )} 
        
      </div>
    );
  }

}
