import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { Image } from 'react-bootstrap';

class ChatMessage extends Component {

  renderReceiver() {
    return (
      <Slide left cascade fraction={1} delay={this.props.delay}>
        <div>
          <div className="row chatContainer">
            <div className="col-md-2">
              <Image className="bumbleProfile" src="../img/grace_bumble.jpg" circle />
            </div>
            <div className="leftChatBubble col-md-10">
              <p className="leftChatMessage">{this.props.message}</p>
            </div>
          </div>
        </div>
      </Slide>
    );
  }

  renderSender() {
    return (
      <Slide right cascade fraction={1} delay={this.props.delay}>
        <div>
          <div className="row chatContainer">
            <div className="rightChatBubble col-md-10 col-md-push-5 col-md-offset-1">
              <p className="rightChatMessage">{this.props.message}</p>
            </div>
            <div className="col-md-2 col-md-push-5">
              <Image className="bumbleProfile" src="../img/aodh_bumble.png" circle />
            </div>
          </div>
        </div>
      </Slide>
    );
  }

  render() {
    return (
      <span>
        {this.props.isReceiver ? this.renderReceiver() : this.renderSender()}
      </span>
    );
  }
}

export default ChatMessage;
