import { combineReducers } from 'redux'

const initialState = {
	position: document.getElementById('globe').getAttribute('data-position'),
	playing: ''
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
