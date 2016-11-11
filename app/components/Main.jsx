import React, { Component } from 'react';
import Navigation from './Navigation';
import ReactAudioPlayer from 'react-audio-player';

export default class Main extends Component {

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}

        <ReactAudioPlayer
          src="/audio/final-exam.mp3"
          autoPlay
        />
                    		
      </div>
    )
  }
}