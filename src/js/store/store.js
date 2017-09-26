import { createStore} from 'redux'
import { Provider } from 'react-redux'
import React from 'react'

import RealJson from '../data/real_json'
import ADID from '../data/AD-ID_stat'
import combinedReducers from '../reducers/reducers'

RealJson.values.forEach(	    
	item => {
		item[7] = (parseFloat(item[5],10) - parseFloat(item[6],10)).toFixed(2) + ' $'
		item[8] = (parseFloat(item[3],10) / parseFloat(item[2],10) * 100).toFixed(2) + ' %'
		item[9] = (parseFloat(item[4],10) / parseFloat(item[3],10) * 100).toFixed(2) + ' %'
		item[10] = (parseFloat(item[4],10) / parseFloat(item[2],10) * 100).toFixed(2) + ' %'
		item[11] = (parseFloat(item[7],10) / parseFloat(item[6],10) * 100).toFixed(2) + ' %'
		item[12] = (parseFloat(item[5],10) / parseFloat(item[3],10)).toFixed(2) + ' $'
		item[13] = (parseFloat(item[5],10) / parseFloat(item[2],10)).toFixed(2) + ' $'
		item.push( parseFloat('0.' + item[0],10).toFixed(2) )
		item.unshift(<input type='checkbox'/>)
				
		return item			
	}
)	    

RealJson.columns.unshift('')	
RealJson.columns.push('BID')

ADID.values.forEach(	    
	item => item.unshift(<input type='checkbox'/>)
)	

ADID.columns.unshift('')	
ADID.columns.push('BID')

const initialState = {widgetTable: RealJson, teaserTable: ADID }

const store = createStore(combinedReducers, initialState)

export default store