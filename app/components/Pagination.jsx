import React, {Component} from 'react';

class Pagination extends Component {

  constructor(props){
    super(props);

    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handlePrevClick(){
    this.props.prevPage();
  }

  handleNextClick(){
    this.props.nextPage();
  }

  render() {
    return (
      <div className='pagination'>
        <span onClick={this.handlePrevClick}>prev </span>
        <span>{this.props.currentPage}</span>
        <span onClick={this.handleNextClick}> next</span>
      </div>
    );
  }
}

export default Pagination;