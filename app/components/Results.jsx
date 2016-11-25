import React, {Component} from 'react';
// my components
import Image from 'Image';
import Display from 'Display';
import Pagination from 'Pagination';

class Results extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentPage: 1,
      currentResults: []
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.updateCurrentResults = this.updateCurrentResults.bind(this);
  }

  nextPage(){
    this.setState({
      currentPage: ++this.state.currentPage
    });
    this.updateCurrentResults()
  }

  prevPage(){
    if(this.state.currentPage > 1){
      this.setState({
        currentPage: --this.state.currentPage
      });
      this.updateCurrentResults()
    }
  }
  
  updateCurrentResults(){
    let currentResults = this.props.results;
    currentResults.splice((this.state.currentPage - 1) * 6, 6);
    console.log(currentResults)

    this.setState({currentResults});
  }

  render(){
    const {results, total} = this.props;

    return (
      <div>
        <h3>Results: {total.toLocaleString()}</h3>

        <Display if={total}>

          <div>
            {results.map((result, i) => {
              return <Image 
                        key={i} 
                        type="result"
                        saveToFav={this.props.saveToFav}
                        {...result} />;
            })}
          </div>

          <Pagination 
            nextPage={this.nextPage} 
            prevPage={this.prevPage}
            {...this.state} />

        </Display>
        
      </div>
    )
  }

}

export default Results;