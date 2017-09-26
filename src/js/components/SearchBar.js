import React, { Component } from 'react'

class SearchBar extends Component{
	render () {
		return (
			<div className='SearchBar'>
				<input className='search' type='text' placeholder='Search by BID'/>
				<button onClick={this.props.search}>Search</button>
				<button onClick={this.props.clear} className={this.props.searchMode?'':'hidden'}>Clear Search Results</button>
				<button onClick={this.props.selectAll}>Select All</button>
				<button onClick={this.props.unselectAll}>Unselect All</button>
			</div>					
		)	
	}
}

export default SearchBar