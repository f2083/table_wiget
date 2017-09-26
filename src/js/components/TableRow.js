import React, { Component } from 'react'

class TableRow extends Component{
	
	render(){
		return (
			<tr className='TableRow'>
				{this.props.cellData.map(
					(item,index) => {
						return <td key={index + 1}>{item}</td>
					}
				)}			
			</tr>				
		)	
	}
}

export default TableRow