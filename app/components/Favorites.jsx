import React, {Component} from 'react';
// my components
import Image from 'Image';

class Favorites extends Component {

  constructor(props){
    super(props);
    this.renderFavorites = this.renderFavorites.bind(this);
  }

  renderFavorites(){
    const favorites = this.props.favorites;
    if(favorites.length === 0){
      return null;
    } else {
      return favorites.map((favorite, i) => {
        return <Image key={i} {...favorite} type="favorite" />;
      });
    }
    // return <h1>{favorites.length}</h1>
    // 
  }

  render(){
    return (
      <div>
        <h1>Favorites</h1>
        {this.renderFavorites()}
      </div>
    );
  }

}

export default Favorites;