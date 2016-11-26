import React, {Component} from 'react';
import _ from 'lodash';

// my components
import Header from 'Header';
import Body from 'Body';

// api
import photoSearchAPI from 'photo-search';
import data from '../api/data.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchText: '',
      total: false,
      results: [],
      favorites: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.saveToFav = this.saveToFav.bind(this);
    this.removeFromFav = this.removeFromFav.bind(this);
    this.updateFav = this.updateFav.bind(this);
  }

  handleInput(searchText){
    this.setState({searchText});
  }

  handleSearch(){
    // clear out the previous results
    this.setState({results:'', total: false});

    photoSearchAPI.getPhotos(this.state.searchText)
      .then(results => {
        // REFACTOR THIS PART
        let total;

        if(results[0] === 0){
          console.log('No Results');
          results = data;
        } 

        results.shift();
        total = results.length;
        this.setState({results,total});   
      })
      .catch(err => {
        console.log(err);
      });
  }

  saveToFav(photo){
    // check if photo is already in favorites
    const index = _.findIndex(this.state.favorites, favorite => {
      return favorite.pid === photo.pid || favorite.src === photo.src;
    });
    // if not, add it!
    if(index === -1){
      let newFavs = this.state.favorites; 
      newFavs.push(photo);
      this.setState({favorites:newFavs});
    }   
  }

  removeFromFav(pid){
    const index = _.findIndex(this.state.favorites, photo => photo.pid === pid);
    let newFavs = this.state.favorites.slice();
    newFavs.splice(index,1);
    this.setState({favorites: newFavs}); 
  }

  updateFav(pid1, pid2){
    console.log('Attempting to update: ', pid1, pid2);
    const index1 = _.findIndex(this.state.favorites, photo => photo.pid === pid1);
    const index2 = _.findIndex(this.state.favorites, photo => photo.pid === pid2);

    let newFavs = this.state.favorites.slice();  
    let temp = newFavs[index1];

    newFavs[index1] = newFavs[index2];
    newFavs[index2] = temp;

    this.setState({favorites:newFavs});
  }

  render(){
    return (
      <div className='container'>
        <Header 
          onSearch={this.handleSearch} 
          onInput={this.handleInput} />
        <Body 
          total={this.state.total}
          results={this.state.results} 
          favorites={this.state.favorites} 
          saveToFav={this.saveToFav} 
          removeFromFav={this.removeFromFav} 
          updateFav={this.updateFav}/>
      </div>
    );
  }

}

export default App;
