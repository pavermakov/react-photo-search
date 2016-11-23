import React, {Component} from 'react';

// my components
import Header from 'Header';
import Body from 'Body';

// api
import photoSearchAPI from 'photo-search';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      searchText: '',
      results: [],
      favorites: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.saveToFav = this.saveToFav.bind(this);
  }

  handleInput(searchText){
    this.setState({searchText});
  }

  handleSearch(){
    // clear out the previous results
    this.setState({results:''});

    photoSearchAPI.getPhotos(this.state.searchText)
      .then(results => {
        // the first result is a total number (probably)
        // we can remove it for now
        results.shift();
        this.setState({results});
      })
      .catch(err => {
        console.log(err);
      });
  }

  saveToFav(photo){
    // WE NEED TO CHECK IF THE PHOTO IS ALREADY IN FAVORITES
    let newFavs = this.state.favorites;
    newFavs.push(photo);
    this.setState({favorites:newFavs});
  }

  render(){
    return (
      <div>
        <Header 
          onSearch={this.handleSearch} 
          onInput={this.handleInput} />
        <Body 
          results={this.state.results} 
          favorites={this.state.favorites} 
          saveToFav={this.saveToFav} />
      </div>
    );
  }

}

export default App;
