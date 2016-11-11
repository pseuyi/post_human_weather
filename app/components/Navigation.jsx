import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post'

export default class Navigation extends Component {
  constructor (props) {
    super(props);
    this.state={
      canPost: false
    };
    this.showPost=this.showPost.bind(this);
  }

  showPost () {
    this.setState({canPost: true})
  }

  render() {
    return (
      <div>

        <div type='text' id='globe-pos' data-position='' className='top-container' ref='hello' value=''></div>
        <input className='top-input'></input>
        <input className='lower-right-input' placeholder='2016'></input>

        <div className='bottom-container'>
          <div className='left-bar half-bar'>
            <h5>left bar buttom</h5>
          </div>
          <div className='right-bar half-bar' onClick={this.showPost}>
            <h5>right bar button</h5>
          </div>
          {this.state.canPost? <Post /> : null}
          <div className='full-bar'>
            <h3>fullbar</h3>
          </div>
        </div>

      </div>
    )
  }
}
