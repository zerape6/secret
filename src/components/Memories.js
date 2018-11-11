import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ChatMessage from './ChatMessage';
import { Button } from 'react-bootstrap';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

  revealNextScene() {
    const nextScene = this.state.scene + 1;
    this.setState({ scene: nextScene }, () => {
      scroller.scrollTo(`scene-${nextScene}`, {
        duration: 1500,
        delay: 100,
        smooth: true});
    });
  }

  render() {
    return (
      <div className="container">
        <Element>
          <Fade fraction={1}>
            <div>
            <div className="empty-block-50"></div>
            <p className="p1 white">~ March 13, 2018 ~</p>
            </div>
          </Fade>
          <Fade fraction={1}>
            <div>
              <p className="p2 white">Our first date</p>
            </div>
          </Fade>
          <div className="empty-block-50"></div>
          <Fade>
            <div>
              <div class="polaroid-images">
                <a title="Guu Otokomae"><img height="200" src="../img/guu.png"/></a>
                <a title="Smarty Pantz"><img height="200" src="../img/smartypantz.png"/></a>
                <a title="Karaoke"><img height="200" src="../img/karaoke.png"/></a>
              </div>
            </div>
          </Fade>
          <div className="clearfix"></div>
          <div className="empty-block-100"></div>
          <Fade>
            <div className="row clearfix">
              <FontAwesomeIcon onClick={this.revealNextScene.bind(this)} icon="angle-double-down" className="nextIndicator" />
            </div>
          </Fade>
          <div className="empty-block-600"></div>
        </Element>
        {
          this.state.scene > 1 &&
          <Element name="scene-2">
            <Fade fraction={1}>
              <div>
              <div className="empty-block-50"></div>
              <p className="p1 white">~ March 19, 2018 ~</p>
              </div>
            </Fade>
            <Fade fraction={1}>
              <div>
                <p className="p2 white">Date numero two</p>
              </div>
            </Fade>
            <div className="empty-block-50"></div>
            <Fade>
              <div>
                <div className="polaroid-images">
                  <a className="polaroidFiller"></a>
                  <a title="Pidgin"><img height="200" src="../img/pidgin.png"/></a>
                  <a title="Smarty Pantz"><img height="200" src="../img/smartypantz.png"/></a>
                  <a title="Karaoke"><img height="200" src="../img/karaoke.png"/></a>
                </div>
              </div>
            </Fade>
            <div className="clearfix"></div>
            <div className="empty-block-100"></div>
            <Fade>
              <div className="row clearfix">
                <FontAwesomeIcon onClick={this.revealNextScene.bind(this)} icon="angle-double-down" className="nextIndicator" />
              </div>
            </Fade>
          </Element>
        }
        <div className="empty-block-600"></div>
      </div>
    );
  }
}

export default Memories;
