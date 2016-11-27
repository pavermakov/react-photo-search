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
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleDragStart(draggablePhoto){
    this.setState({draggablePhoto});
  }

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

      <Display if={favorites.length !== 0}>

        <div>

          <h3 className='body__heading'>Favorites</h3>
          
          <div className="body__favorites-items">
            {favorites.map((favorite, i) => {
              return <Image 
                        key={i} 
                        type="favorites" 
                        removeFromFav={this.props.removeFromFav}
                        onDragStart={this.handleDragStart}
                        
                        onDragOver={this.handleDragOver}
                        onDragLeave={this.handleDragLeave}
                        onDragEnd={this.handleDragEnd}
                        {...this.state} 
                        {...favorite} />;
            })}
          </div>

        </div>
      
      </Display>  

    );
  }

}

export default Favorites;