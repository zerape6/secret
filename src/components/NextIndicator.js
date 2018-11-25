import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

class NextIndicator extends Component {
  
  componentDidMount() {
    /*window.$(".nextIndicatorButton").mouseenter(function() {
      const sound = document.createElement('audio');
      sound.setAttribute('src', './Tutturuu.mp3');
      sound.play();
    });*/
  }

  render() {
    return (
      <Fade>
        <div className="nextIndicatorContainer">
          <Button className={`nextIndicatorButton ${this.props.classes}`}
              bsStyle="primary"
              onClick={this.props.onClick.bind(this)}>
              <FontAwesomeIcon icon="arrow-alt-circle-down" 
              className="nextIndicatorIcon" />
          </Button>
        </div>
      </Fade>
    );
  }
}

export default NextIndicator;
