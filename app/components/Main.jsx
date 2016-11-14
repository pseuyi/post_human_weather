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
const toggleMusic = () => ({
  type: 'TOGGLE_MUSIC'
})


export default class Main extends Component {
  constructor (props) {
    super(props)
    this.getLocation=this.getLocation.bind(this);
    this.state={
      playing: true,
      curr: 46
    }
    this.getLocation=this.getLocation.bind(this)
    this.toggleMusic=this.toggleMusic.bind(this)
  }

  componentDidMount () {
    axios('/turn/markers')
    .then(markers=>{ 
      console.log('did we get markers on mount?', markers.data)
      // very annoying: markers.data gives markers array of objects that have coords, msg properties
      let formattedMarkers = []
      markers.data.map(markObj => {
        formattedMarkers.push([markObj.coords, markObj.msg, markObj.img])
      })
      console.log('trying to format markers.data', formattedMarkers)
      store.dispatch(putMarkersOnState(formattedMarkers))
    })
  }

  getLocation (e) {
    let current = e.target.dataset.position;
    console.log('current moon position', +current[0]+current[1])
    let pos = +current[0]+current[1]
    if(this.state.curr==46) return;
    else if (this.state.curr!=46&&this.state.curr<80&&pos>80) this.toggleMusic(true);
    else if (this.state.curr>80&&pos<80) this.toggleMusic(false);
    this.setState({curr: pos})  
  }
  
  toggleMusic (prop) {
    this.setState({playing: prop})
  } 

  render() {
    // console.log('what are the marker props on the main component?', this.props.markers.markers)
    console.log('what is the state?', this.state.playing)
    const markers = this.props.markers.markers
    const map = this.props.createMarker
    
    return (
      <div>
        <Navigation />
      
        <div id='moon-pos' data-position='' ref='location' value='' onMouseMove={this.getLocation}></div>

        {this.props.children}

        {
          markers && markers.map(marker=>{
            map(marker[0], marker[1], marker[2])
          })
        }
        {  
          this.state.playing? (<ReactAudioPlayer src='/audio/final-exam.mp3' autoPlay />) : (<ReactAudioPlayer src='/audio/xombies.mp3' autoPlay />)
        }

      </div>
    )
  }
}


