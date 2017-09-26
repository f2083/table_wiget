import React, { Component } from 'react'

class Navigation extends Component{

	render () {
		return(
			<ul className='Navigation'>
				<li><a href='/widget_table'>Widget Table</a></li>
				<li><a href='/teaser_table'>Teaser Table</a></li>
			</ul>
		)
	}
}

export default Navigation
