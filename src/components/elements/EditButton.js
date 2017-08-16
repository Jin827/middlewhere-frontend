import React, {Component} from 'react';
// import EditProject from '../modals/EditProject'


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
        <FloatingActionButton secondary={true} style={style} onClick={this.props.addButtonClick}><ContentAdd /></FloatingActionButton>
      </div>
    )
  }

}
