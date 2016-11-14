import React, { Component } from 'react';
import axios from 'axios'
import store from '../store'

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state ={
      new: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  compononentDidMount () {
    this.setState({new: false})
  }
  handleSubmit( e) {
    e.preventDefault();
    const pack = {
      coords: JSON.parse("[" + e.target.coords.value + "]"),
      msg: e.target.msg.value,
      img: e.target.cond.value
    }
    this.setState({new: true})
    packToDb(pack);
  }

  render() {
    return (
      <div>
      {
        this.state.new? <div className='new-msg'>MeSSAGe SeNT</div> : null
      }

      <div className='post-box half-bar'>
        <div id='describe'>
        <p>
          <u id='how-to'>what is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'human weather'
          </u>
        </p>
        <p></p>
        to use human weather please enter a latitude and longitude separated by a comma and select a condition type along with an optional message
        <p></p>
        lat is described in degrees and can be any number between -90 to 90. <br/>
        lng is described in degrees and can be any number between -180 and 180. <br/>
        <p></p>
        for example: the south pole is roughly '-90, -146' <br/>
        new york city is at '40.7128, -74.0059'
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input className='coord-input' type="text" placeholder="lat, lng" name="coords" />
            <input type="text" placeholder="what is it like there" name="msg" /> <br/>
            <select name='cond'>

              <option value='/image/emoji/hot.png'>hot</option>
              <option value='/image/emoji/cold.png'>cold</option>
              <option value='/image/emoji/sunny.png'>sunny</option>
              <option value='/image/emoji/cloudy.png'>cloudy</option>
              <option value='/image/emoji/rainy.png'>rainy</option>
              <option value='/image/emoji/snowy.png'>snowy</option>
              <option value='/image/emoji/breezy.png'>breezy</option>
              <option value='/image/emoji/foggy.png'>foggy</option>
              <option value='/image/emoji/thunderstorm.png'>thunderstorm</option>
              <option value='/image/emoji/tornado.png'>tornado/hurricane</option>
              <option value='/image/hug.png'>it's all good</option>
              <option value='/image/heart.png'>luv</option>
              <option value='/image/emoji/cat.png'>meow</option>
              <option value='/image/emoji/so-so.png'>so-so</option>
              <option value='/image/emoji/crap.png'>feel like crap</option>
              <option value='/image/emoji/fear.png'>shocked and afraid</option>

            </select>
          </div>
          <button type='submit' value='report'>report</button>
        </form>
      </div>
      </div>
    )
  }
}

const packToDb = (pack) => {
  // receive the pack with marker data from a form in Post compononent
  const coords = pack[0];
  const msg = pack[1];
  const img = pack[2];
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

