import React, {Component} from 'react';
// my components
import Results from 'Results';
import Favorites from 'Favorites';

class Body extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Body</h1>
        <Results results={this.props.results} saveToFav={this.props.saveToFav} />
        <Favorites favorites={this.props.favorites} />
      </div>
    );
  }

}

export default Body;