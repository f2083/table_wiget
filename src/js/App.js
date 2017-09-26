import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore} from 'redux'
import { Provider } from 'react-redux'

import store from './store/store'
import Widget from './components/Widget'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
		<div className="App">		
			<Navigation/>	
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path='/' component={Widget}></Route>
					<Route path='/widget_table' component={Widget}></Route>
					<Route path='/teaser_table' component={Widget}></Route>
      		</Router>
			</Provider>
		</div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-container')
)