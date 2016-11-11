import React, { Component } from 'react';
import Navigation from './Navigation';
import Sadie from './Sadie'
import ReactAudioPlayer from 'react-audio-player';

export default class Main extends Component {
  render() {
    console.log('what are the props on the main component?', this.props)
    const map = this.props.createMarker
    return (
      <div>
        <Navigation />
        <Sadie />
        {this.props.children}
        {map([51.5, -0.09], 'HELLO WORLD')}
      </div>
    )
  }
}

// <ReactAudioPlayer
//   src="/audio/final-exam.mp3"
//   autoPlay
// />