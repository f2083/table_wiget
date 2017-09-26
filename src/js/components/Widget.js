import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableRow from './TableRow'
import Pagination from './Pagination'
import SearchBar from './SearchBar'

function mapStateToProps (state) {
  return {
  		widgetTable: state.widgetTable,
  		teaserTable: state.teaserTable
  }
}

class Widget extends Component{
	constructor(props) {
		super(props)
		this.state = {
			start: 0,
			pagination: 50,
			tableData: /teaser_table/.test(this.props.route.path) ? 	this.props.teaserTable : this.props.widgetTable,
			searchResuts: []
		}	
		this.paginationBtn = this.paginationBtn.bind(this)	
		this.handlePrevBtn = this.handlePrevBtn.bind(this)
		this.handleNextBtn = this.handleNextBtn.bind(this)
		this.selectAll = this.selectAll.bind(this)
		this.unselectAll = this.unselectAll.bind(this)
		this.search = this.search.bind(this)
		this.clear = this.clear.bind(this)
	}
		
	render () {
		var searchMode = this.state.searchResuts.length > 0
		const paginatedValues = this.state.tableData.values.slice(this.state.start, this.state.start + this.state.pagination)
		const values = searchMode ? this.state.searchResuts : paginatedValues
		
		return (
				<div className='Widget'>
				
					<SearchBar searchMode={searchMode} search={this.search} clear={this.clear} selectAll={this.selectAll } unselectAll={this.unselectAll}/>							
					
					<div className='table-wrapper'>					
						<Pagination searchMode={searchMode} pageHandler={this.paginationBtn} nextHandler={this.handleNextBtn} prevHandler={this.handlePrevBtn}/>
					
						<table className='widgetTable'>
							<tbody>
    							<TableRow cellData={this.state.tableData.columns}/>   
   							{values.map(
   								(item,index)=>{
										return <TableRow cellData={item} key={index}/>    						
    								}
   							)}					
   						</tbody>
						</table>
					</div>
				</div>	
		)
	}
	
	paginationBtn (e) {
		this.setState({pagination: e.target.dataset.items})
	}
	
	handlePrevBtn (e) {
		this.setState(
			(prevState, props) => {
				var start = prevState.start - prevState.pagination >= 0 ? prevState.start - prevState.pagination : 0
				return {start}	
			}		
		)
	}
	
	handleNextBtn (e) {
		this.setState(
			(prevState, props) => {
				var start = prevState.start + prevState.pagination
				if( start > prevState.tableData.values.length) {
					return
				}
				return {start}
			}		
		)
	}
	
	selectAll (e) {
		var table = document.querySelector('.widgetTable')
		var inp = table.getElementsByTagName('input')
		var inputsArr = [... inp]
		
		inputsArr.forEach(
			item => item.checked = true	
		)
	}
	
	unselectAll (e) {
		var table = document.querySelector('.widgetTable')
		var inp = table.getElementsByTagName('input')
		var inputsArr = [... inp]
		
		inputsArr.forEach(
			item => item.checked = false	
		)
	}
	
	search () {
		var query = document.querySelector('.search').value
		var regX = new RegExp(query)
		
		var result = this.state.tableData.values.filter(
			item => regX.test(item[item.length-1])
		)
		
		this.setState({ searchResuts: result})
	}
	
	clear(){
		this.setState({ searchResuts: []})
	}
			
}	

export default connect(mapStateToProps)(Widget)