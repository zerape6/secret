import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import NextIndicator from "./NextIndicator";
import Santa from "./Santa";
import { Image } from 'react-bootstrap';

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
      const sound = document.createElement('audio');
      sound.setAttribute('src', './unlock.wav');
      sound.play();
      this.props.onAcknowledgeFinished();
    });
  }

  onSantaReveal() {
    /*setTimeout(() => {
      const sound = document.createElement('audio');
      sound.setAttribute('src', './santa.mp3');
      sound.play();
    }, 500);*/
    setTimeout(() => {
      this.revealNextScene();
    }, 5000);
  }

  render() {
    return (
      <div>
        {/* <Fade fraction={0.6} onReveal={this.onSantaReveal.bind(this)}>
          <div>
            <div className="empty-block-100"></div>
            <p className="p2 white">What you're about to see is a website of all our memories</p>
            <div class="container" style={{ display: "flex", justifyContent: "center"}}>
              <ReactPlayer url="./forensic.mp4" playing={this.state.playing} height="400px" />
            </div>
          </div>
        </Fade>
        <Fade fraction={1} delay={3400}>
          <div className="empty-block-25"></div>
          <p className="p3 white">Lmao...</p>
        </Fade> 
        <Fade fraction={1} delay={7400}>
          <p className="p3 white">We watch a lot of forensic files</p>
        </Fade> 
        <div>
          <Fade fraction={1} delay={9400}>
            <NextIndicator onClick={this.revealNextScene.bind(this)} />
          </Fade>
    </div>*/}
        <Element name="acknowledge" className="viewportBox">
        <Fade fraction={0.6} onReveal={this.onSantaReveal.bind(this)}>
            <p className="p2 white">What you're about to see is a website of all our memories</p>
            <div className="empty-block-50"></div>
            <Santa />
        </Fade>
        </Element>
        {/*<div>
          <Fade fraction={1}>
            <NextIndicator classes="nextIndicatorWithSanta" onClick={this.revealNextScene.bind(this)} />
          </Fade>
        </div>*/}
        {
          this.state.scene > 1 &&
          <Element name="scene-2" className="viewportBox">
              <div className="container">
              <Fade fraction={0} onReveal={() => {
                setTimeout(() => {
                  this.setState({ acknowledged: true }, () => {
                    this.props.onAcknowledgeFinished();
                  });
                }, 5000);
              }}>
                <p className="p2 white">Starting with our first messages on Bumble...</p>
              </Fade>
              <div className="empty-block-25"></div>
              <Fade fraction={0}>
                  <Image src="../img/bumble-logo.jpg" circle height="300px" />
              </Fade>
              {/*<Fade fraction={1} delay={3600}>
                <div className="empty-block-25"></div>
                <p className="p3 white">But before continuing...</p>
                <FontAwesomeIcon icon={`${this.state.acknowledged ? "lock-open" : "lock"}`} className="lock" />
                <div className="empty-block-25"></div>
              </Fade> 
              <Fade fraction={1} delay={7600}>
                <p className="p3 white">You must acknowledge something...</p>
                <div className="empty-block-50"></div>
              </Fade>  
              <Fade fraction={1} delay={11600}> 
                <Button className="acknowledge" disabled={this.state.acknowledged} bsStyle="primary" onClick={this.acknowledge.bind(this)}>I am bad at math</Button>
                <div className="empty-block-100"></div>
        </Fade>*/}
              </div>
          </Element>
        }
      </div>
    );
  }
}

export default Acknowledge;
