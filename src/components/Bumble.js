import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ChatMessage from './ChatMessage';
import { Button } from 'react-bootstrap';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import BounceLoader from 'react-spinners/BounceLoader';

class Bumble extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      scene: 1,
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

    if (nextScene > 4) {
      setTimeout(() => {
        this.setState({ scene: nextScene + 1 });
        this.props.onBumbleFinished();
      }, /*400*/0);
    }  
  }

  render() {
    return (
      <div className="container">
        <Fade fraction={1}>
          <div>
          <div className="empty-block-50"></div>
          <p className="p1 white">~ Bumble ~</p>
          </div>
        </Fade>
        <Fade  fraction={1}>
          <div>
          <p className="p2 white">The following messages are real</p>
          <div className="empty-block-50"></div>
          </div>
        </Fade>
        <ChatMessage
          isReceiver={true}
          message="Hey handsome"
          delay={3000} />
        <ChatMessage
          isReceiver={false}
          message="Hi." 
          delay={6000} />
        <ChatMessage
          isReceiver={true}
          message="Was your mother a beaver? ‘Cause damn!" 
          delay={9000} />
        <ChatMessage
          isReceiver={false}
          message="I'm uncomfortable." 
          delay={14000} />
        <div className="empty-block-50"></div>
        {this.state.scene === 1 ?
        <Fade delay={16000}>
          <Button bsStyle="primary" onClick={this.revealNextScene.bind(this)}>Jump to recent messages</Button>
          <div className="empty-block-100"></div>
        </Fade> :
          <div className="empty-block-600"></div>
        }
        {
          this.state.scene > 1 &&
          <Element name="scene-2">
            <div className="empty-block-50"></div>
            <p className="p2 white">Aodh tries to have a normal conversation</p>
            <div className="empty-block-50"></div>
            <ChatMessage
              isReceiver={false}
              message="So what do you do for a living?"
              delay={4000} />
            <ChatMessage
              isReceiver={true}
              message="I work at Subway because I want your footlong 😉"
              delay={8000} />
            <ChatMessage
              isReceiver={true}
              message="😘 😘 😘"
              delay={11000} />
            <ChatMessage
              isReceiver={false}
              message="Lmao..."
              delay={15500} />
            <ChatMessage
              isReceiver={false}
              message="I don't have a footlong"
              delay={19500} />
            <div className="empty-block-50"></div>
            {this.state.scene === 2 ?
            <Fade delay={22000}>
              <Button bsStyle="primary" onClick={this.revealNextScene.bind(this)}>Jump to recent messages</Button>
              <div className="empty-block-100"></div>
            </Fade> : <div className="empty-block-600"></div>
            }
          </Element>
        }
        {
          this.state.scene > 2 &&
          <Element name="scene-3">
            <div className="empty-block-50"></div>
            <p className="p2 white">🤔 🤔 🤔</p>
            <div className="empty-block-50"></div>
            <ChatMessage
              isReceiver={true}
              message="If you were a Transformer, you’d be Optimus Fine."
              delay={2000} />
            <ChatMessage
              isReceiver={false}
              message="Ok"
              delay={7000} />
            <ChatMessage
              isReceiver={true}
              message="My doctor told me I’m missing vitamin U."
              delay={11000} />
            <ChatMessage
              isReceiver={true}
              message="Can you help me?"
              delay={14500} />
            <ChatMessage
              isReceiver={false}
              message="Bye"
              delay={18500} />
            <div className="empty-block-50"></div>
            {this.state.scene === 3 ?
            <Fade delay={21000}>
              <Button bsStyle="primary" onClick={this.revealNextScene.bind(this)}>Jump to recent messages</Button>
              <div className="empty-block-100"></div>
            </Fade> : <div className="empty-block-600"></div>
            }
          </Element>
        }
        {
          this.state.scene > 3 &&
          <Element name="scene-4">
            <div className="empty-block-50"></div>
            <p className="p2 white">Lets meet up!</p>
            <div className="empty-block-50"></div>
            <ChatMessage
              isReceiver={false}
              message="If I go on a date with you, will you leave me alone."
              delay={2000} />
            <ChatMessage
              isReceiver={true}
              message="Yes"
              delay={7000} />
            <ChatMessage
              isReceiver={false}
              message="Ok one date and thats it."
              delay={11000} />
            <ChatMessage
              isReceiver={true}
              message="Lmao aight"
              delay={15000} /> 
            <ChatMessage
              isReceiver={false}
              message="Im serious."
              delay={19000} />
            <div className="empty-block-50"></div>
            {this.state.scene === 4 &&
            <Fade delay={21000}>
              <Button bsStyle="primary" onClick={() => {
                this.revealNextScene();
              }}>Exit Bumble</Button>
              <div className="empty-block-600"></div>
            </Fade>
            }
          </Element>
        }
        {/*
          this.state.scene > 4 &&
          <Element name="scene-5">
          <Fade>
            <div className="empty-block-400"></div>
            <div className="center">
              <BounceLoader
                sizeUnit={"px"}
                size={50}
                color={'white'}
                loading={true}
              />
            </div>
            <p className="p2 white">Loading memories...</p>
            <div className="empty-block-600"></div>
          </Fade>
          </Element>
        */}
        <div className="empty-block-600"></div>
      </div>
    );
  }
}

export default Bumble;
