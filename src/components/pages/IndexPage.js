import React, {Component} from 'react';
import api from '../../api';
import ProjectCard from '../elements/ProjectCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import CreateProject from '../modals/CreateProject';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import image from './overview.jpg';
import FontIcon from 'material-ui/FontIcon';
import CreateProjects from 'material-ui/svg-icons/file/create-new-folder';
import People from 'material-ui/svg-icons/social/people';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import RaisedButton from 'material-ui/RaisedButton';

import './IndexPage.css';
import '../App.css'

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const style = {
      height: 200,
      width: 200,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    let featureIcons = {
      height: '44px',
      width: '44px',
      color:'#00BFA5',

    }

    return (
      <div className="whole">
        <header>
          <div className="header-image"></div>
        </header>



      <div className="index-section-one">
        <div className="index-page-row">
          <Paper className="feature col-large-4" style={style} transitionEnabled={true} zDepth={2} circle={true}>
            <CreateProjects  style={featureIcons} hoverColor={'#80CBC4'}/>
            <p className="feature-subtitle"><strong>Create Projects</strong></p>
            <p className="feature-paragraph">Organize your project into a set of tasks.</p>
          </Paper>
          <Paper className="feature col-large-4" style={style} transitionEnabled={true} zDepth={2} circle={true}>
            <People  style={featureIcons} hoverColor={'#80CBC4'}/>
            <p className="feature-subtitle"><strong>Assign Users</strong></p>
            <p className="feature-paragraph">Select the right person for the job.</p>
          </Paper>
          <Paper className="feature col-large-4" style={style} transitionEnabled={true} zDepth={2} circle={true}>
            <TrendingUp style={featureIcons} hoverColor={'#80CBC4'}/>
            <p className="feature-subtitle"><strong>Track Progress</strong></p>
            <p className="feature-paragraph">Monitor your team's work with live updates.</p>
          </Paper>
        </div>
      </div>

        <div className="index-section-two">
          <div className="index-page-two-row" >
            <div className="index-signup col-large-6"  style={style} >
              <p className="signup-now"><strong>Stay on Track with Workflow</strong></p>
              <RaisedButton label="Sign Up Now" primary={true}/>
            </div>
            <div className="col-large-6 teamwork-style">
              <div className="teamwork-image"></div>
            </div>
        </div>


      </div>
      </div>
    );

  }
}

//<img className="header-image"src= {image}/>
// <div class="box1">
//   <p class="title">notify<span>.</span></p>
//   <p class= "header-desc">A great new free psd theme to showcase your new application</p>
// </div>
//<Paper style={style} zDepth={1} circle={true} />
// <div class="property-logo">heeeello</div>
//   <div class="row">
//     <div class="properties col-large-3 col-medium-6 col-small-12">
//       <div class="property-logo">heeeello</div>
//
        // <p class="subtitle">Editable Theme</p>
        // <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet tempus.</p>
//
//     </div>
//   </div>
