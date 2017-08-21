import React, {Component} from 'react';
import '../App';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
const style = {
    margin: 0,
    right: 100,
    bottom: 100,
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
        <FloatingActionButton secondary={true} style={style} onClick={this.props.buttonClick}><ContentAdd/></FloatingActionButton>
      </div>
  )}
}
