import React, {Component} from 'react';

class Image extends Component {

  constructor(props){
    super(props);

    // // I want to save the state here because I am planning 
    // // to save images to "Favorites"
    // this.state = {
    //   id: this.props.pid,
    //   src: this.props.src,
    //   type: this.props.type
    // }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.props.type === 'result'){
      this.props.saveToFav({
        pid: this.props.pid,
        src: this.props.src
      });
    } else {
      this.props.removeFromFav(this.props.pid);
    }
    
  }

  render(){

    return (
      <div onClick={this.handleClick} style={{'display': 'inline-block'}}>
        <img src={this.props.src} alt={this.props.pid} draggable={this.props.draggable} />
      </div>
    );
  }

}

export default Image;