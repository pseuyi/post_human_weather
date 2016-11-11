import React, { Component } from 'react';
import axios from 'axios'


export default class Post extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit( e) {
    e.preventDefault();
    const pack = {
      coords: JSON.parse("[" + e.target.coords.value + "]"),
      msg: e.target.msg.value
    }
    packToDb(pack);
  }

  render() {
    return (
      <div className='post-box half-bar'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input type="text" placeholder="lat, long" name="coords" />
          </div>
          <div className='form-group'>
            <input type="text" placeholder="what is it like there" name="msg" />
          </div>
          <button type='submit' value='report'>report</button>
        </form>
      </div>
    )
  }
}

const packToDb = (pack) => {
  // receive the pack with marker data from a form in Post compononent
  const coords = pack[0];
  const msg = pack[1];
  console.log('packed up the new post', pack)
  saveNewMarker(pack)
}

const saveNewMarker = (pack) => {
  console.log('saving the new marker', pack)
  
  axios.post('/turn/markers', pack)
  .then(newMarker=>{
    console.log('nice, put a new marker into db', newMarker)
    store.dispatch(postToMap(newMarker.data))
  })
  
}

const postToMap = (newMarker) => ({
  type: 'POST_TO_MAP',
  newMarker
})

