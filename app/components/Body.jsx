import React, {Component} from 'react';
import _ from 'lodash';
// my components
import Results from 'Results';
import Favorites from 'Favorites';
import Display from 'Display';

class Body extends Component {

  render(){

    return (
      <div>

        <Display if={this.props.total || this.props.total === 0}>
          <Results total={this.props.total} results={this.props.results} saveToFav={this.props.saveToFav} />
        </Display>

        
        <Favorites 
          favorites={this.props.favorites} 
          removeFromFav={this.props.removeFromFav} 
          updateFav={this.props.updateFav}/>
      </div>
    );
  }

}

export default Body;