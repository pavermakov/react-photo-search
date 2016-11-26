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
    const {total, currentPage} = this.props;

    if(currentPage < Math.ceil(total / 6)){
      this.props.nextPage();
    }   
  }

  render() {
    const {total, currentPage} = this.props;
    const totalPages = Math.ceil(total / 6);
    return (
      <div className='pagination'>
        <span 
          className={`pagination__button pagination__button--controls ${currentPage === 1 ?  'pagination__button--disabled': ''}`} 
          onClick={this.handlePrevClick}>prev </span>

        <span className='pagination__button'>{this.props.currentPage}</span>

        <span 
          className={`pagination__button pagination__button--controls ${currentPage === totalPages ? 'pagination__button--disabled': ''}`}
          onClick={this.handleNextClick}> next</span>
      </div>
    );
  }
}

export default Pagination;