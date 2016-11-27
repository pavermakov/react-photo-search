import React, {Component} from 'react';

// my components
import Display from 'Display';

class Image extends Component {

  constructor(props){
    super(props);

    this.state = {
      inFavorites: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
  }

  handleClick(){
    if(this.props.type === 'results'){
      this.props.saveToFav({
        pid: this.props.pid,
        src: this.props.src
      });
      this.setState({inFavorites: true});
    } else {
      this.props.removeFromFav(this.props.pid);
      this.setState({inFavorites: false});
    }
  }

  handleDragStart(e){
    this.props.onDragStart(this.props.pid);
  }

  handleDragOver(e){
    e.preventDefault();
    this.props.onDragOver(this.props.pid);
  }

  handleDragLeave(e){
    e.preventDefault();
    this.props.onDragLeave(this.props.pid);
  }

  handleDragEnd(e){
    e.preventDefault();
    this.props.onDragEnd();
  }

  render(){
    
    const {type} = this.props;

    return (

      <div className={`body__${this.props.type}-item`}>

        <Display if={type === 'results'}>

          <div className='photo'>
            <img 
              className='photo__src' 
              src={this.props.src} 
              alt={this.props.pid}  
            />
            <div className="photo__overlay" onClick={this.handleClick}>
              <div className="photo__content">
                <i className='fa fa-plus' aria-hidden="true"></i>
              </div>
            </div>
          </div>

        </Display>

        <Display if={type === 'favorites'}>

          <div 
            className='photo'
            onDragStart={this.handleDragStart}
            onDragOver={this.handleDragOver}
            onDragLeave={this.handleDragLeave} 
            onDragEnd={this.handleDragEnd}
            draggable='true'>

            <img className='photo__src' src={this.props.src} alt={this.props.pid} />
            <div className="photo__overlay">
              <div className="photo__content" onClick={this.handleClick}>
                <i className='fa fa-minus' aria-hidden="true"></i>
              </div>
            </div>
          </div>

        </Display>
        
      </div>
    );
  }

}

export default Image;