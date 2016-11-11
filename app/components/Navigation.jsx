import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Navigation extends Component {
  componentDidMount () {
    // console.log('what is pos', this.refs.hello.dataset)
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
          <div className='right-bar half-bar'>
            <h5>right bar button</h5>
          </div>
          <div className='full-bar'>
            <h3>fullbar</h3>
          </div>
        </div>

      </div>
    )
  }
}
