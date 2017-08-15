import React, {Component} from 'react';
import '../App'

export default class AddButton extends Component {
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
        <button className="fa fa-plus fa-1x add-board-button" onClick={this.props.addButtonClick}></button>
      </div>
    )
  }

}
