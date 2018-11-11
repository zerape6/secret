import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import NextIndicator from "./NextIndicator";
import Santa from "./Santa";

class Acknowledge extends Component {
  
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      scene: 1,
      acknowledged: false,
    }
  }

  revealNextScene() {
    const nextScene = this.state.scene + 1;
    this.setState({ scene: nextScene }, () => {
      scroller.scrollTo(`scene-${nextScene}`, {
        duration: 1500,
        delay: 100,
        smooth: true});
    });
  }

  acknowledge() {
    this.setState({ acknowledged: true }, () => {
      this.props.onAcknowledgeFinished();
    });
  }

  render() {
    return (
      <div>
        
        <div className="empty-block-50"></div>
        <Fade fraction={1}>
          <div>
            <div className="empty-block-100"></div>
            <p className="p2 white">What you're about to see is a website of all our memories</p>
            <div className="empty-block-100"></div>
          </div>
        </Fade>
        <Fade fraction={1}>
          <NextIndicator onClick={this.revealNextScene.bind(this)} />
        </Fade>
        <div className="empty-block-400"></div>
        {
          this.state.scene > 1 &&
          <Element name="scene-2">
            <Fade fraction={1}>
              <div>
                <div className="empty-block-100"></div>
                <p className="p2 white">Starting from the first day we matched...</p>
                <div className="empty-block-100"></div>
              </div>
            </Fade>
            <div className="empty-block-200"></div>
            <div className="empty-block-50"></div>
            <Fade fraction={1}>
              <NextIndicator onClick={this.revealNextScene.bind(this)} />
            </Fade>
          </Element>
        }
        {
          this.state.scene > 2 &&
          <Element name="scene-3">
            <div className="empty-block-100"></div>
            <Fade fraction={1}>
              <div>
                <div className="empty-block-100"></div>
                <p className="p2 white">Before continuing, you must acknowledge that you understand this website will be cheesy</p>
                <div className="empty-block-50"></div>
                <Button className="acknowledge" disabled={this.state.acknowledged} bsStyle="primary" onClick={this.acknowledge.bind(this)}>Acknowledge</Button>
                <div className="empty-block-50"></div>
                <FontAwesomeIcon icon={`${this.state.acknowledged ? "lock-open" : "lock"}`} className="lock" />
                <div className="empty-block-100"></div>
              </div>
            </Fade>
            <div className="empty-block-200"></div>
          </Element>
        }
        
      </div>
    );
  }
}

export default Acknowledge;
