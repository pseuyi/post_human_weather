import React, { Component } from 'react';
import Navigation from './Navigation';
import Sadie from './Sadie'
import ReactAudioPlayer from 'react-audio-player';
import store from '../store'
import axios from 'axios'

const putMarkersOnState = (markers) => ({
  type: 'LOAD_MARKERS',
  markers
})

export default class Main extends Component {
  componentDidMount () {
    axios('/turn/markers')
    .then(markers=>{ 
      console.log('did we get markers on mount?', markers.data)
      // very annoying: markers.data gives markers array of objects that have coords, msg properties
      let formattedMarkers = []
      markers.data.map(markObj => {
        formattedMarkers.push([markObj.coords, markObj.msg])
      })
      console.log('trying to format markers.data', formattedMarkers)
      store.dispatch(putMarkersOnState(formattedMarkers))
    })
  }
  render() {
    console.log('what are the marker props on the main component?', this.props.markers.markers)
    const markers = this.props.markers.markers
    const map = this.props.createMarker
    return (
      <div>
        <Navigation />
      
        {this.props.children}

        {
          markers && markers.map(marker=>{
            map(marker[0],marker[1], '/image/sun.png')
          })
        }
         <ReactAudioPlayer src="/audio/final-exam.mp3" autoPlay/>
      </div>
    )
  }
}


//  <ReactAudioPlayer
  //  src="/audio/final-exam.mp3"
    //autoPlay
  ///>
