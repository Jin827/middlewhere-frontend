import React, {Component} from 'react';
// import EditProject from '../modals/EditProject'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';



export default class EditButton extends Component {
  constructor(props){
    super(props);
    this.state ={
      showComponent:false,
    }
  }

  _handleClick = (e) => {
    e.preventDefault();
    this.setState({
      showComponent:true,
    })
  }

  render(){
    return (
      <div className="add-button">
        <FloatingActionButton secondary={true} onClick={this.props.addButtonClick}><ContentAdd /></FloatingActionButton>
      </div>
    )
  }

}
