import React, {Component} from 'react';

class Header extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSubmit(e){
    // TODO validate input !!!!
    e.preventDefault();
    this.props.onSearch();
  }

  handleKeyUp(){
    let searchText = this.refs.searchText.value;
    this.props.onInput(searchText);
  }

  render(){
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
            value='Search' />
        </form>
      </div>
    );
  }

}

export default Header;