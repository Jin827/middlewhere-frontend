import React, {Component} from 'react';
import api from '../../api';
import ProjectCard from '../elements/ProjectCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import CreateProject from '../modals/CreateProject';
import './Home.css';
import '../App.css'

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  



  render() {

    return (
      <div className="home">

        <h2>My new index page</h2>

      </div>
    );

  }
}
