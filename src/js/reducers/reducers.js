import { combineReducers } from 'redux'

var newState

function widgetTable(state = [], action) {
  return state
}

function teaserTable(state = [], action){
	return state
}

const combinedReducers = combineReducers({
  widgetTable,
  teaserTable
})

export default combinedReducers
