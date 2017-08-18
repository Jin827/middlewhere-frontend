import React, {Component} from 'react';
import '../App';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    margin: 0,
    right: 50,
    bottom: 50,
    position: 'fixed',
};

export default class AddButton extends Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }

  render(){
    return (
      <div>
        <FloatingActionButton secondary={true} style={style} onClick={this.props.buttonClick}><ContentAdd /></FloatingActionButton>
      </div>
  )}

}
