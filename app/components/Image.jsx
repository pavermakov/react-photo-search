import React, {Component} from 'react';

// my components
import Display from 'Display';

class Image extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    // this.handleDragEnter = this.handleDragEnter.bind(this);
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
    } else {
      this.props.removeFromFav(this.props.pid);
    }
  }

  handleDragStart(e){
    console.log('drag: ' + this.props.pid);
    this.props.onDragStart(this.props.pid);
  }

  // handleDragEnter(e){
  //   e.preventDefault();
  //   console.log('enter: ' + this.props.pid);
  //   this.props.onDragEnter(this.props.pid);
  // }

  handleDragOver(e){
    e.preventDefault();
    console.log('over: ' + this.props.pid);
    this.props.onDragOver(this.props.pid);
  }

  handleDragLeave(e){
    e.preventDefault();
    console.log('leave: ' + this.props.pid);
    this.props.onDragLeave(this.props.pid);
  }

  handleDragEnd(e){
    e.preventDefault();
    console.log('end: ' + this.props.pid);
    this.props.onDragEnd();
  }

  render(){
    
    const {type} = this.props;

    return (

      <div className={`body__${this.props.type}-item`}>

        <Display if={type === 'results'}>

          <div className='photo' >
            <img className='photo__src' src={this.props.src} alt={this.props.pid} />
            <div className="photo__overlay">
              <div className="photo__content" onClick={this.handleClick}>&#43;</div>
            </div>
          </div>

        </Display>

        <Display if={type === 'favorites'}>

          <div 
            onClick={this.handleClick} 
            onDragStart={this.handleDragStart}
            onDragOver={this.handleDragOver}
            onDragLeave={this.handleDragLeave} 
            onDragEnd={this.handleDragEnd}
            draggable='true'>

            <img src={this.props.src} alt={this.props.pid} />
          </div>

        </Display>

        

      </div>
    );
  }

}

export default Image;