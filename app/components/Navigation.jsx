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

        <div type='text' id='globe-pos' data-position='' className='top-container' ref='hello' value=''></div>
        <input className='top-input'></input>
        <input className='lower-right-input' placeholder='2016'></input>

        <div className='bottom-container'>
          <div className='left-bar half-bar big-button' onClick={this.toggleForecast}>
            <h2>forecast</h2>
          </div>
          <div className='right-bar half-bar big-button' onClick={this.togglePost}>
            <h2>would you like to report on current conditions</h2>
          </div>

          {this.state.canPost? <Post /> : null}
          {this.state.forecast? <Sadie /> : null}

          <div className='full-bar big-button'>
            <h3>about this project</h3>
          </div>
        </div>

      </div>
    )
  }
}
