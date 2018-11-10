import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ChatMessage from './ChatMessage';
import { Button } from 'react-bootstrap';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Image } from 'react-bootstrap';
class Memories extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      scene: 1,
    }
  }

  render() {
    return (
      <div className="container">
        <div className="empty-block-400"></div>
        
        <Element name="firstDate">
          <Fade fraction={1}>
            <div>
            <div className="empty-block-100"></div>
            <p className="p1 white">~ March 13, 2018 ~</p>
            </div>
          </Fade>
          <Fade fraction={1}>
            <div>
              <p className="p2 white">Our first date</p>
            </div>
          </Fade>
          <Fade>
            <div>
              <div class="polaroid-images">
                <a title="Guu Otokomae"><img height="200" src="../img/guu.png"/></a>
                <a title="Smarty Pantz"><img height="200" src="../img/smartypantz.png"/></a>
                <a title="Karaoke"><img height="200" src="../img/karaoke.png"/></a>
              </div>
            </div>
          </Fade>
          <div className="empty-block-400"></div>
          <ChatMessage
            isReceiver={true}
            message="Hey, I had fun! I just remembered I totally forgot to pay you back for karaoke... My treat if you ever want to hang out again :)"
            delay={2400} />
          <ChatMessage
            isReceiver={true}
            message="Also I'm getting sick of bumble because my dating app tolerance is like 2 weeks at a time 😛 so just text me 604-781-7002"
            delay={3200} />
          <div className="empty-block-600"></div>
        </Element>
      </div>
    );
  }
}

export default Memories;
