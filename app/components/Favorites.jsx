import React, {Component} from 'react';
// my components
import Image from 'Image';
import Display from 'Display';

class Favorites extends Component {

  constructor(props) {
    super(props);

    this.state = {
      draggablePhoto: false,
      enteredPhoto: false,
      isHovering: false
    }

    this.handleDragStart = this.handleDragStart.bind(this);
    // this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleDragStart(draggablePhoto){
    this.setState({draggablePhoto});
  }

  // handleDragEnter(enteredPhoto){
  //   if(this.state.draggablePhoto !== enteredPhoto){
  //     this.setState({enteredPhoto});
  //   }
  // }

  handleDragOver(hoveredPhoto){
    const {draggablePhoto, enteredPhoto} = this.state;

    if(draggablePhoto !== hoveredPhoto){
      this.setState({
        enteredPhoto: hoveredPhoto,
        isHovering: true
      });
    }
  }

  handleDragLeave(){
    const {enteredPhoto} = this.state;

    this.setState({
      enteredPhoto: false,
      isHovering: false
    })
    
  }

  handleDragEnd(){
    const {draggablePhoto, enteredPhoto, isHovering} = this.state;

    if(draggablePhoto && enteredPhoto && draggablePhoto !== enteredPhoto && isHovering){
      console.log('Good job!');
      // write a function that takes the draggable id, entered id, switches photos in array and rerenders favorites
      this.props.updateFav(draggablePhoto, enteredPhoto);

      this.setState({
        draggablePhoto: false,
        enteredPhoto: false,
        isHovering: false
      });

    } 
  }

  render(){
    const favorites = this.props.favorites;

    return (
      <div>

        <Display if={favorites.length !== 0}>

          <h3>Favorites</h3>
          
          {favorites.map((favorite, i) => {
            return <Image 
                      key={i} 
                      type="favorite" 
                      removeFromFav={this.props.removeFromFav}
                      onDragStart={this.handleDragStart}
                      
                      onDragOver={this.handleDragOver}
                      onDragLeave={this.handleDragLeave}
                      onDragEnd={this.handleDragEnd}
                      {...this.state} 
                      {...favorite} />;
          })}

        </Display>
        
      </div>
    );
  }

}

export default Favorites;