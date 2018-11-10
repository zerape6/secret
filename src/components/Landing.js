import React, { Component } from 'react';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.typeWriter = React.createRef();
    this.state = this.getInitialState();
    this.onFinished = props.onLandingFinished;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({scene: 2})
    }, 10)
  }

  getInitialState() {
    return {
      showNextIndicator: false,
      scene: 1,
    }
  }

  onTypingDone() {
    this.setState({
      showNextIndicator: true,
    });

    if (typeof this.onFinished === "function") {
      this.onFinished();
    }
  }

  getTypingScene() {
    return (
      <Typist 
        cursor={{
          show: true,
          blink: true,
          element: '|',
          hideWhenDone: true,
          hideWhenDoneDelay: 0,
          }}
        avgTypingDelay={100}
        startDelay={2000}
        onTypingDone={this.onTypingDone.bind(this)}>
        <Typist.Delay ms={2000} />
        <span className="title">Dear </span>
        <Typist.Delay ms={2000} />
        <span className="title">Grace,</span>
        <Typist.Backspace count={6} delay={2000} />
        <Typist.Delay ms={2000} />
        <span className="title">Taterthot,</span>
        <Typist.Backspace count={10} delay={2000} />
        <Typist.Delay ms={2000} />
        <span className="title">girlfriRnd,</span>
        <Typist.Backspace count={4} delay={3000}/>
        <Typist.Delay ms={1000} />
        <span className="title">end,</span>
        <Typist.Backspace count={11} delay={2500}/>
        <Typist.Delay ms={3000} />
        <span className="title">future</span>
        <Typist.Delay ms={1000} />
        <span className="title"> wife?</span>
        <Typist.Backspace count={1} delay={2500}/>
        <Typist.Backspace count={5} delay={2000}/>
        <Typist.Backspace count={6} delay={1000}/>
        <Typist.Delay ms={2000} />
        <span className="title">cute</span>
        <Typist.Delay ms={1500} />
        <span className="title"> but dumb,</span>
        <Typist.Delay ms={1000} />
        <span className="title"> :)</span>
        <Typist.Backspace count={3} delay={2000}/>
        <Typist.Backspace count={15} />
        <Typist.Delay ms={2000} />
        <Typist.Backspace count={5} />
        <Typist.Delay ms={3000} />
        <span className="title">Grace</span>
        <Typist.Delay ms={1500} />
        <span className="title"> Yu</span>
        <Typist.Delay ms={2000} />
        <br></br>
        <Typist.Delay ms={3000} />
        <span className="title">Merry </span>
        <Typist.Delay ms={500} />
        <span className="title">Christmas</span>
        <Typist.Delay ms={2000} />
        <span className="title"> :)</span>
        <Typist.Delay ms={2000} />
      </Typist>
    );
  }

  getScene() {
    if (this.state.scene === 1) {
      return (
        <div>
          <p id="loading" className="p2">Waiting for snow to fall</p>
        </div>
      );
    } else if (this.state.scene === 2) {
      return this.getTypingScene();
    }
  }

  render() {
    return (
      <div>
        <div className="helperBlock"></div>
        {this.getScene()}
        {this.state.showNextIndicator &&
        <div>
          <div className="empty-block-100"></div>
          <div className="empty-block-100"></div>
          <Fade>
            <p className="p2">Scroll down</p>
          </Fade>
        </div>}
        <div onClick={() => {
          this.onTypingDone();
        }}>Skip typewriter</div>
      </div>
    );
  }
}

export default Landing;
