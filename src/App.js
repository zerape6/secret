import React, { Component } from 'react';
import SnowStorm from 'react-snowstorm';
import Landing from "./components/Landing";
import Bumble from "./components/Bumble";
import Memories from "./components/Memories";
import Fade from 'react-reveal/Fade';
import { Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class App extends Component {

  constructor(props) {
    super(props);
    library.add(faLock);
    library.add(faLockOpen);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      landingFinished: false,
      bumbleFinished: false,
      acknowledged: false,
    }
  }

  onLandingFinished() {
    this.setState({landingFinished: true});
  }

  onBumbleFinished() {
    this.setState({bumbleFinished: true}, () => {
      scroller.scrollTo("firstDate", {
        duration: 1500,
        delay: 100,
        smooth: true});
    });
  }

  acknowledge() {
    this.setState({acknowledged: true}, () => {
      scroller.scrollTo("bumble", {
        duration: 1500,
        delay: 200,
        smooth: true});
    });
  }

  renderScrollingContainer() {
    return (
      <div className="scrolling-container">
      <div className="p2 white" onClick={() => {
          this.onLandingFinished();
          this.acknowledge();
        }}>Skip acknowledge</div>
        <div className="empty-block-400"></div>
        <Fade fraction={1}>
          <div>
            <div className="empty-block-100"></div>
            <p className="p2 white">What you're about to see is a website of all our memories</p>
            <div className="empty-block-100"></div>
          </div>
        </Fade>
        <div className="empty-block-400"></div>
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
          <div>
            <div className="empty-block-100"></div>
            <p className="p2 white">Before continuing, you must acknowledge that you understand this website will be cheesy and it WILL make you vomit</p>
            <div className="empty-block-50"></div>
            <Button disabled={this.state.acknowledged} bsStyle="primary" onClick={this.acknowledge.bind(this)}>Acknowledge</Button>
            <div className="empty-block-50"></div>
            <FontAwesomeIcon icon={`${this.state.acknowledged ? "lock-open" : "lock"}`} className="lock" />
            <div className="empty-block-100"></div>
          </div>
        </Fade>
        <div className="empty-block-200"></div>
        { this.state.acknowledged && 
        <span>
          <div className="empty-block-300"></div>
          <Element name="bumble">
            <Bumble onBumbleFinished={this.onBumbleFinished.bind(this)} />
          </Element>
        </span>
        }
        { this.state.bumbleFinished &&
          <Memories />
        }
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Landing onLandingFinished={this.onLandingFinished.bind(this)} />
        </header>
        <div className="p2 white" onClick={() => {
          this.onLandingFinished();
          this.onBumbleFinished();
        }}>Skip to memories</div>
        { this.state.landingFinished && this.renderScrollingContainer() }
        <SnowStorm 
          vMaxY={5} 
          vMaxX={0} 
          followMouse={false} 
          animationInterval={50} 
          snowStick={false}
          useMeltEffect={false} 
          useTwinkleEffect={false} />
      </div>
    );
  }
}

export default App;
