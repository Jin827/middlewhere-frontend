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
        <form>
          <input type = "checkbox"
                 id = "chkHam"
                 value = "ham" />
        </form>
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
