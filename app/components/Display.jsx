import React, {Component} from 'react';

/* RETURNS ITS CHILDER IF PROP 'IF' EVALUATES TO TRUE */

class Display extends Component {
  render() {
    return this.props.if ? <div>{this.props.children}</div> : null;
  }
}

export default Display;