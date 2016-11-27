import React, {Component} from 'react';

/* THIS COMPONENT RENDERS THE SEARCH FORM */
/* WHICH CONSISTS OF AN INPUT FIELD AND A BUTTON */

class Header extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.refs.searchText.value.length > 0){
      this.props.onSearch();
    }  
  }

  handleKeyUp(){
    let searchText = this.refs.searchText.value;
    this.props.onInput(searchText);
  }

  render(){

    const {isSearching} = this.props;

    return (
      <div className='header'>
        <h1 className='header__heading'>Gallery</h1>
        <form className='header__form' onSubmit={this.handleSubmit}>
          <input 
            className='header__search'
            type='text' 
            ref='searchText' 
            placeholder='search images ...' 
            onKeyUp={this.handleKeyUp} />

          <input 
            className='header__button'
            type='submit' 
            value={isSearching ? 'Searching' : 'Search'}
          />
        </form>
      </div>
    );
  }

}

export default Header;