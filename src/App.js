import React, { Component } from 'react';
import SnowStorm from 'react-snowstorm';
import Landing from "./components/Landing";
import Acknowledge from "./components/Acknowledge";
import Bumble from "./components/Bumble";
import Memories from "./components/Memories";
import Santa from "./components/Santa";
import Fade from 'react-reveal/Fade';
import { Button, Navbar, NavItem, Nav } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLockOpen, faAngleDoubleDown, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class App extends Component {
  
  constructor(props) {
    super(props);
    library.add(faLock);
    library.add(faLockOpen);
    library.add(faAngleDoubleDown);
    library.add(faArrowAltCircleDown);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      landingFinished: false,
      bumbleFinished: false,
      acknowledgeFinished: false,
    }
  }

  onLandingFinished() {
    this.setState({landingFinished: true}, () => {
      scroller.scrollTo("acknowledge", {
        duration: 1500,
        delay: 100,
        smooth: true});
    });
  }

  onBumbleFinished() {
    this.setState({bumbleFinished: true}, () => {
      scroller.scrollTo("memories", {
        duration: 1500,
        delay: 100,
        smooth: true});
    });
  }

  onAcknowledgeFinished() {
    this.setState({acknowledgeFinished: true}, () => {
      scroller.scrollTo("bumble", {
        duration: 1500,
        delay: 100,
        smooth: true});
    });
  }
  devNavbar() {
    return(
      <Navbar className="navbar" fixedTop={true}>
      <Nav>
        <NavItem eventKey={1} href="#">
          <div onClick={() => {
            this.landing.onTypingDone();
          }}>Skip typewriter</div>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <div onClick={() => {
            this.onLandingFinished();
            this.onAcknowledgeFinished();
          }}>Skip acknowledge</div>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <div onClick={() => {
              this.setState({acknowledgeFinished: true}, () => {
                scroller.scrollTo("bumble", {
                  duration: 1500,
                  delay: 100,
                  smooth: true});
                this.bumble.setState({scene: 3}, () => {
                  this.bumble.revealNextScene();
              });
            });
          }}>Skip to end of bumble</div>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <div onClick={() => {
            this.onLandingFinished();
            this.onAcknowledgeFinished();
            this.onBumbleFinished();
          }}>Skip to memories</div>
        </NavItem>
      </Nav>
      </Navbar>
    );
  }

  renderScrollingContainer() {
    return (
      <div className="scrolling-container">
        { this.state.landingFinished && 
          <span>
            <Element name="acknowledge">
              <Acknowledge onAcknowledgeFinished={this.onAcknowledgeFinished.bind(this)} />
            </Element>
            <div className="empty-block-200"></div>
          </span>
        }
        { this.state.acknowledgeFinished && 
          <Element name="bumble">
            <Bumble ref={(ip) => this.bumble = ip} onBumbleFinished={this.onBumbleFinished.bind(this)} />
          </Element>
        }
        { this.state.bumbleFinished &&
          <Element name="memories">
            <Memories />
          </Element>
        }
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.devNavbar()}
        <header className="App-header">
          <Landing ref={(ip) => this.landing = ip} onLandingFinished={this.onLandingFinished.bind(this)} />
        </header>
        { this.renderScrollingContainer() }
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
