import React, {Component} from 'react';
// my components
import Image from 'Image';
import Display from 'Display';

class Results extends Component {
  
  render(){
    const {results, total} = this.props;

    return (
      <div>
            {console.log('Results: ', results)}
            <h3>Results: {total.toLocaleString()}</h3>


            {results.map((result, i) => {
              return <Image 
                        key={i} 
                        type="result"
                        saveToFav={this.props.saveToFav}
                        {...result} />;
            })}

          

      </div>
    )
  }

}

export default Results;