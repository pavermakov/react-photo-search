import React, {Component} from 'react';
// my components
import Image from 'Image';

class Results extends Component {

  constructor(props){
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults() {
    const results = this.props.results;

    if(results.length === 0){
      return null;
    } else {
      return results.map((result, i) => {
        return <Image 
                  key={i} 
                  type="result"
                  saveToFav={this.props.saveToFav}
                  {...result} />;
      });
    }
  }
  
  render(){
    return (
      <div>
        <h3>Results</h3>
        {this.renderResults()}
      </div>
    )
  }

}

export default Results;