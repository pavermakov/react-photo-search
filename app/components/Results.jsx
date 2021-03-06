import React, {Component} from 'react';
// my components
import Image from 'Image';// ←--------------------|
import Display from 'Display';//                 |
import Pagination from 'Pagination';// ←--------|
/*                                             |  */                                     
/* THIS COMPONENT RENDERS SEARCH RESULTS      |  */ 
/* AS WELL AS PAGINATION (THANKS CAP ________| )*/

class Results extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentPage: 1,
      perPage: 6,
      currentResults: []
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.renderPhotos = this.renderPhotos.bind(this);
    this.updateCurrentResults = this.updateCurrentResults.bind(this);   
  } 

  componentDidMount() {
    this.updateCurrentResults();
  }

  nextPage(){
    /* NOT A SINGLE ASS TUORIAL ON THE WEB TOLD ME */
    /* THAT this.setState() IS ASYNC */
    this.setState({
      currentPage: this.state.currentPage + 1
    }, () => {
      this.updateCurrentResults();
    });   
  }

  prevPage(){
    if(this.state.currentPage > 1){
      this.setState({
        currentPage: this.state.currentPage - 1
      }, () => {
        this.updateCurrentResults();
      });    
    }
  }

  renderPhotos(){ 
    return this.state.currentResults.map((result, i) => {
      return <Image 
                key={i} 
                type="results"
                saveToFav={this.props.saveToFav}
                {...result} />;
    });
  }
  
  updateCurrentResults(){
    const n = this.state.perPage;
    let currentResults = this.props.results.slice().splice((this.state.currentPage - 1) * n, n);   
    this.setState({currentResults});
  }

  render(){
    const {total} = this.props;
    
    return (
      <div>
        <h3 className='body__heading'>Results: {total}</h3>

        <Display if={total}>

          <div className={`body__results-items ${this.props.results ? 'body__results-items-full' : ''}`}>
            {this.renderPhotos()}
          </div>

          <Pagination 
            total={this.props.total}
            nextPage={this.nextPage} 
            prevPage={this.prevPage}
            {...this.state} 
          />

        </Display>
        
      </div>
    )
  }

}

export default Results;