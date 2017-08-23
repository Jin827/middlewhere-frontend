import React, {Component} from 'react';
import '../App';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    margin: 0,
    right: 50,
    bottom: 50,
    position: 'fixed',
};

export default class CompleteButton extends Component {
  constructor(props){
    super(props);
    this.state ={
      showComponent:false,
    }
  }
  // _handleClick = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     showComponent:true,
  //   })
  // }

  render(){
    
    return (
      <div>
        <div className="Complete-button">
          <RaisedButton label="Complete Task" secondary={true} onClick={this._completedTask}/>
        </div>
      </div>
  )}
  // render(){
  //
  //   return (
  //     <div>
  //       <FloatingActionButton secondary={true} style={style}
  //         onClick={this.props.addButtonClick}>
  //         <ContentAdd /></FloatingActionButton>
  //
  //     </div>
  // )}


}
