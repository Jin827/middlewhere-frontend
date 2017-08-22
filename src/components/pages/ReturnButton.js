import React, {Component} from 'react';
import '../App';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
const style = {
    // margin: 0,
    // right: 100,
    // bottom: 100,
    position: 'fixed'
};
export default class ReturnButton extends Component {
  constructor(props){
    super(props);
    this.state ={
    }
  }
  render(){
    return (
      <div>
        <h1>
        <FlatButton label= {this.props.projectTitle} primary={true} style={style}></FlatButton>
        </h1>
      </div>
  )}
}
