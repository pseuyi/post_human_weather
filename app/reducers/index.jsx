import { combineReducers } from 'redux'

const initialState = {
	markers: [[[51.5, -0.09], 'hello, world']]
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
  	case 'LOAD_MARKERS': 
  		return Object.assign({}, state, {markers: state.markers.concat(action.markers)})
  	case 'POST_TO_MAP':
  		return Object.assign({}, state, {markers: state.markers.concat(action.newMarker)})
    default: return state
  }
};

export default rootReducer
