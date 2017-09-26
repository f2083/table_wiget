import React, { Component } from 'react'

class Pagination extends Component{
	render () {
		
		return !this.props.searchMode && (
			<div className='Pagination'>
				<button onClick={this.props.prevHandler}>previous</button>
				<button data-items='50' onClick={this.props.pageHandler}>50</button>
				<button data-items='100' onClick={this.props.pageHandler}>100</button>
				<button data-items='200' onClick={this.props.pageHandler}>200</button>
				<button data-items='500' onClick={this.props.pageHandler}>500</button>
				<button data-items='1000' onClick={this.props.pageHandler}>1000</button>
				<button onClick={this.props.nextHandler}>next</button>
			</div>					
		)	
	}
}

export default Pagination