import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NextIndicator extends Component {

  render() {
    return (
      <Fade>
        <FontAwesomeIcon icon="arrow-alt-circle-down" className="nextIndicator" onClick={this.props.onClick.bind(this)} />
      </Fade>
    );
  }
}

export default NextIndicator;
