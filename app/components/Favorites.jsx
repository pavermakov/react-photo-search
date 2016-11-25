import React, {Component} from 'react';
// my components
import Image from 'Image';
import Display from 'Display';

class Favorites extends Component {

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
                      {...favorite} />;
          })}

        </Display>
        
      </div>
    );
  }

}

export default Favorites;