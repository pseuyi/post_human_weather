import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post'
import Sadie from './Sadie'

export default class Navigation extends Component {
  constructor (props) {
    super(props);
    this.state={
      canPost: false,
      forecast: false
    };
    this.togglePost=this.togglePost.bind(this);
    this.toggleForecast=this.toggleForecast.bind(this);
  }

  togglePost () {
    this.setState({canPost: !this.state.canPost})
  } 
  toggleForecast () {
    this.setState({forecast: !this.state.forecast})
  }   

  render() {
    return (
      <div>
        
        {this.state.forecast? <Sadie /> : null}

        <div type='text' id='globe-pos' data-position='' className='top-container' ref='hello' value=''></div>
        <input className='top-input'></input>
        <input className='lower-right-input' placeholder='2016'></input>

        <div className='bottom-container'>
          <div className='left-bar half-bar big-button' onClick={this.toggleForecast}>
            <h5>forecast</h5>
          </div>
          <div className='right-bar half-bar big-button' onClick={this.togglePost}>
            <h5>would you like to report on current conditions</h5>
          </div>

          {this.state.canPost? <Post /> : null}

          <div className='full-bar big-button'>
            <h5>about this project</h5>
          </div>
        </div>

      </div>
    )
  }
}
