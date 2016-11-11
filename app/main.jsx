'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store'

// import components below
import Main from './components/Main'
import Navigation from './components/Navigation'
import Sadie from './components/Sadie'

render (
  <Provider store={store}>
  	<Router history={browserHistory}>
	    <Route path='/' component={Main}>
	    	<Route path='/1-0' component={Sadie} />
	    </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)