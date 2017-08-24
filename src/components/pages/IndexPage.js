import React, {Component} from 'react';
import api from '../../api';
import ProjectCard from '../elements/ProjectCard';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import CreateProject from '../modals/CreateProject';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import image from './overview.jpg'
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

    return (
      <div className="whole">
        <header>
          <div className="header-image"></div>
        </header>



      <div className="section-one">
        <div className="index-page-row">
          <Paper className="feature " style={style} transitionEnabled={true} zDepth={2} circle={true}>

            <p className="subtitle">Create Projects and Tasks</p>
            <p className="paragraph">Organize your project into a set of tasks.</p>
          </Paper>
          <Paper className="feature col-large-4" style={style} transitionEnabled={true} zDepth={2} circle={true}>
            <p className="subtitle">Create Projects and Tasks</p>
            <p className="paragraph">Organize your project into a set of tasks.</p>
          </Paper>
          <Paper className="feature col-large-4" style={style} transitionEnabled={true} zDepth={2} circle={true}>
            <p className="subtitle">Create Projects and Tasks</p>
            <p className="paragraph">Organize your project into a set of tasks.</p>
          </Paper>
        </div>
      </div>


        <div className="section-two"></div>
        <div className="section-three"></div>
        <div className="section-four"></div>
        <div className="section-five"></div>

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
