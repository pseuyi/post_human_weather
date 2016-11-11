'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store'

// import components below
import Main from './components/Main'

console.log('is this the earth thing?', window.earth) //yes
console.log('can i get the init func?', window.initialize) //yes
console.log('can i get the createMarker func?', window.createMarker)

export const initialize = window.initialize.bind(window);
export const createMarker = window.createMarker.bind(window);

const AppContainer = connect(
  null,
  null
) (
  (initialize, createMarker) => 
  	<div>
    	<Main createMarker={window.createMarker.bind(window)}  />
    </div>
	)

render (
  <Provider store={store}>
  	<Router history={browserHistory}>
	    <Route path='/' component={AppContainer} onEnter={
	    	initialize()}>
	    </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

// example usage of the createMarker function
// window.createMarker([51.5, -0.09], "<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>");