import React, {Component} from 'react';
import api from '../../api';
import ProjectCard from '../elements/ProjectCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import './Home.css';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: []
    };
  }

  componentDidMount() {
    this._fetchBoards();
  }

  _fetchBoards = () => {
    api.getBoardsList()
    .then(res => {
      this.setState({ boards: res.body.boards })
    })
    .catch(console.error)
  }

  render() {
    let { boards } = this.state
    return (
      <div className="home">
        { boards.map(b =>
          <ProjectCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            updatedAt={b.updatedAt}
          />
        )}
        {auth.isLoggedIn() ? <AddButton /> : null}
      </div>
    );
  }

}
//isAdmin then you can add a project for example
// add delete, assign tasks
