import React, { Component } from 'react';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import NextIndicator from "./NextIndicator";
import BounceLoader from 'react-spinners/BounceLoader';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'react-bootstrap';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.typeWriter = React.createRef();
    this.state = this.getInitialState();
    this.onLandingFinished = props.onLandingFinished;

    this.audioElement = document.createElement('audio');
    this.audioElement.setAttribute('src', './type.mp3');
    
  }


  revealNextScene() {
    const nextScene = this.state.scene + 1;
    this.setState({ 
      scene: nextScene,
      containerStyle: nextScene === 3 ? {} : this.state.containerStyle,
    });
  }

  getInitialState() {
    return {
      showNextIndicator: false,
      scene: 1,
      containerStyle: {    
        flex: "1",
        alignItems: "center",
        display: "flex"
      },
    }
  }

  onCharacterTyped() {
    const sound = document.createElement('audio');
    sound.setAttribute('src', './type4.wav');
    sound.play();
  }

  onTypingDone() {
    this.setState({
      showNextIndicator: true,
      scene: this.state.scene+1,
    });
  }

  finishLanding() {
    if (typeof this.onLandingFinished === "function") {
      this.onLandingFinished();
    }
  }


  getTypingScene() {
    return (
      <div className="computerScreen align-items-left">
      <div className="empty-block-50"></div>
      <Typist
        id="typist"
        cursor={{
          show: true,
          blink: true,
          element: '|',
          hideWhenDone: true,
          hideWhenDoneDelay: 0,
          }}
        avgTypingDelay={130}
        startDelay={3000}
        onTypingDone={this.onTypingDone.bind(this)}
        onCharacterTyped={this.onCharacterTyped.bind(this)}>
        <span>Dear </span>
        <Typist.Delay ms={2000} />
        <span>Grace,</span>
        <Typist.Backspace count={6} delay={1500} />
        <Typist.Delay ms={1000} />
        <span>Taterthot,</span>
        <Typist.Backspace count={10} delay={1500} />
        <Typist.Delay ms={1000} />
        <span>girlfriRnd,</span>
        <Typist.Backspace count={4} delay={1500}/>
        <Typist.Delay ms={700} />
        <span>end,</span>
        <Typist.Backspace count={11} delay={1500}/>
        <Typist.Delay ms={1500} />
        <span>my wittle particle :3</span>
        <Typist.Delay ms={1500} />
        <br></br>
        <span style={{paddingLeft: "40px", fontSize: "122px"}}>Merry </span>
        <Typist.Delay ms={1500} />
        <span style={{fontSize: "122px"}}>Christmas  </span>
        <Typist.Delay ms={1500} />
        <span style={{fontSize: "122px"}}>:)</span>
      </Typist>
      </div>
    );
  }

  render() {
    return (
      <div style={this.state.containerStyle}>
        { this.state.scene === 1 &&
          <Fade>
            <div className="computerScreen">
            <p className="h2 white">Click to connect to Aodh's keyboard</p>
            <p className="h4 white">(he's got some shit to say to you, woman)</p>
            <div className="empty-block-25"></div>
            <Button id="connectButton" className="connectButton" 
              bsStyle="primary" 
              onClick={() => {
                const sound = document.createElement('audio');
                sound.setAttribute('src', './jeopardy-short.mp3');
                sound.play();
                this.revealNextScene()
              }}>
              <FontAwesomeIcon icon="plug" className="connectIcon" />
            </Button>
            </div>
          </Fade>
        } 
        { this.state.scene === 2 &&
          <Fade onReveal={() => {
            setTimeout(() => {
              this.revealNextScene();
            }, 16600);
          }} exit={true}>
            <div className="computerScreen">
              <p className="h2 white">Please wait...</p>
              <div className="empty-block-25"></div>
              <div className="center">
                <BounceLoader
                  sizeUnit={"px"}
                  size={100}
                  color={'#de2f32'}
                  loading={true}
                />
              </div>
              <Fade delay={4000} duration={5000}>
                <div style={{position: "absolute", top:"-100px", left:"100px"}}>
                  <p className="h4 white">My girlfriend:</p>
                  <div>
                    <Image src="../img/graceprofile.png" height="300px" />
                  </div>
                </div>
              </Fade>
              <Fade delay={11000} duration={5000}>
                <div style={{position: "absolute", top:"-100px", right:"100px"}}>
                  <p className="h4 white">Me:</p>
                  <div>
                    <Image src="../img/patrick.png" height="400px" />
                  </div>
                </div>
              </Fade>
            </div>
          </Fade>
        }
        { this.state.scene >= 3 &&
          this.getTypingScene()
        }
        { this.state.showNextIndicator &&
          <div>
            <div className="empty-block-100"></div>
            <NextIndicator onClick={this.finishLanding.bind(this)} />
          </div>
        }
      </div>
    );
  }
}

export default Landing;
