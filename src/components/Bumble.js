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
      }, 4000);
    }  
  }

  render() {
    return (
      <div className="container">
        <Fade fraction={1}>
          <div>
          <div className="empty-block-100"></div>
          <p className="p1 white">~ March 5, 2018 ~</p>
          </div>
        </Fade>
        <Fade  fraction={1}>
          <div>
          <p className="p2 white">Bumble</p>
          <div className="empty-block-100"></div>
          </div>
        </Fade>
        <ChatMessage
          isReceiver={true}
          message="Opinion of DDLC?"
          delay={400} />
        <ChatMessage
          isReceiver={false}
          message="Hey Grace! I've never played it, should I?" 
          delay={1200} />
        <ChatMessage
          isReceiver={true}
          message="Depends, how are you with creepy/ horror games?" 
          delay={2000} />
        <ChatMessage
          isReceiver={false}
          message="I actually don't game that much... I only play league 😆" 
          delay={2800} />
        <div className="empty-block-50"></div>
        {this.state.scene === 1 ?
        <Fade delay={3600}>
          <Button bsStyle="primary" onClick={this.revealNextScene.bind(this)}>Jump to recent messages</Button>
          <div className="empty-block-100"></div>
        </Fade> :
          <div className="empty-block-600"></div>
        }
        {
          this.state.scene > 1 &&
          <Element name="scene-2">
            <div className="empty-block-50"></div>
            <p className="p2 white">Doggos</p>
            <div className="empty-block-50"></div>
            <ChatMessage
              isReceiver={false}
              message="So you like dogs? I have a FAT german shepherd 😄 (he's in Victoria though)"
              delay={400} />
            <ChatMessage
              isReceiver={true}
              message="Ohhhhh my god YES. I love german shepherds. And a T H I C C german shepherd is EVEN BETTER 😍"
              delay={1200} />
            <ChatMessage
              isReceiver={true}
              message="Too cute"
              delay={2000} />
            <ChatMessage
              isReceiver={false}
              message="Hey maybe one day you can meet my dog! Hes a very very bad boy."
              delay={2800} />
            <ChatMessage
              isReceiver={false}
              message="He's 9 years old."
              delay={3600} />
            <div className="empty-block-50"></div>
            {this.state.scene === 2 ?
            <Fade delay={4800}>
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
            <p className="p2 white">Boring people</p>
            <div className="empty-block-50"></div>
            <ChatMessage
              isReceiver={true}
              message="So what do you usually do when you're not working?"
              delay={400} />
              <ChatMessage
              isReceiver={false}
              message="I'm the most boring human possible. On a typical week day, i make dinner, workout, maybe watch an episode of anime, and then league with friends."
              delay={1200} />
              <ChatMessage
              isReceiver={false}
              message="What about you? Whats your typical day?"
              delay={2000} />
            <ChatMessage
              isReceiver={true}
              message="That's a pretty typical weekday for most people. My schedule is pretty similar though sometimes I do freelance work which kind of wrecks my routine."
              delay={2800} />
              <ChatMessage
              isReceiver={true}
              message="I can't wait till the weather gets nicer so I can do running and hiking!"
              delay={3600} />
            <div className="empty-block-50"></div>
            {this.state.scene === 3 ?
            <Fade delay={4400}>
              <Button bsStyle="primary" onClick={this.revealNextScene.bind(this)}>Jump to recent messages</Button>
              <div className="empty-block-100"></div>
            </Fade> : <div className="empty-block-600"></div>
            }
          </Element>
        }
        {
          this.state.scene === 4 &&
          <Element name="scene-4">
            <div className="empty-block-50"></div>
            <p className="p2 white">Lets meet up!</p>
            <div className="empty-block-50"></div>
            <ChatMessage
              isReceiver={false}
              message="Lets meet up sometime. Its nice talking to you 😊"
              delay={400} />
            <ChatMessage
              isReceiver={true}
              message="Yeah, I'd like to meet up as well. I'm a bit busy this week since I'm moving, but I should be free next week :)"
              delay={1200} />
            <div className="empty-block-50"></div>
            {this.state.scene === 4 &&
            <Fade delay={2000}>
              <Button bsStyle="primary" onClick={() => {
                this.revealNextScene();
              }}>Exit Bumble</Button>
              <div className="empty-block-600"></div>
            </Fade>
            }
          </Element>
        }
        {
          this.state.scene === 5 &&
          <Fade>
            <div className="empty-block-50"></div>
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
        }
      </div>
    );
  }
}

export default Bumble;
