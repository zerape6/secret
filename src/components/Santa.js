import React, { Component } from 'react';

class Santa extends Component {

  render() {
    return (
      <div className="santa-container">
      <div class="window">
        <div class="santa">
            <div class="head">
                <div class="face">
                    <div class="redhat">
                        <div class="whitepart"></div>
                        <div class="redpart"></div>
                        <div class="hatball"></div>
                    </div>
                    <div class="eyes"></div>
                    <div class="beard">
                        <div class="nouse"></div>
                        <div class="mouth"></div>
                    </div>
                </div>
                <div class="ears"></div>
            </div>
            <div class="body"></div>
        </div>
    </div>
    </div>
    );
  }
}

export default Santa;
