import React, {Component} from 'react';

class Image extends Component {

  constructor(props){
    super(props);

    // I want to save the state here because I am planning 
    // to save images to "Favorites"
    this.state = {
      id: this.props.pid,
      src: this.props.src,
      type: this.props.type
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.saveToFav({
      pid: this.state.id,
      src: this.state.src
    });
  }

  render(){

    return (
      <div onClick={this.handleClick} style={{'display': 'inline-block'}}>
        <img src={this.state.src} alt={this.state.id} />
      </div>
    );
  }

}

export default Image;