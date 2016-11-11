import React, { Component } from 'react';
import { postToMap } from 'APP/app/actions/post'

export default class Post extends Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const pack = [
      e.target.coords.value,
      e.target.msg.value
    ]
    postToMap(user);
  }

  render() {
    return (
      <div>
        <h1>HI I AM DIV</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input type="text" placeholder="where" name="coords" />
          </div>
          <div className='form-group'>
            <input type="text" placeholder="how is it there" name="msg" />
          </div>
          <button type='submit' value='report'>report</button>
        </form>
      </div>
    )
  }
}
