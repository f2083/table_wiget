import React, { Component } from 'react'
import { connect } from 'react-redux'
import {toggleSide, hideAll, fixSlide, newGame} from '../actions/actions'
import Tile from './Tile'

function mapStateToProps (state) {
  return {
  		slideActions: state.slideActions
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSide: () => {
            dispatch(toggleSide())
        },
        hideAll: () => {
				dispatch(hideAll())        
        },
        fixSlide: () => {
				dispatch(hideAll())        
        },
        newGame: () => {
				dispatch(newGame())        
        }
	}
};

class Game extends Component{
	constructor(props) {
	    super(props)
	    this.state = props
	    this.handleClick = this.handleClick.bind(this)
	}
	
	componentDidUpdate() {
		this.checkEquality()
	}
	
	render () {
		return (
				<div className='Game'>
					{this.props.slideActions.map((item, key)=> {
						return <Tile key={key} index={key} handleClick={this.handleClick}  val={item.value} turned={item.turned || item.fixed}>
						</Tile>
					})}				
				</div>	
		)
	}
	
	handleClick (e) {
		this.props.dispatch(toggleSide(parseInt(e.target.dataset.index,10)))
	}
	
	checkEquality () {
		let turnedTiles = this.props.slideActions.filter((item, index)=>{
			if (item.turned && !item.fixed) {
				item.index = index
				return true
			}		
			
		})
		if(this.props.slideActions.every(item => {return item.fixed})){
			let wannaMore = confirm('You win!!! Want to play one more time?')
			wannaMore ? this.props.dispatch(newGame()) : alert('bye bye!')
			return 
		}	
		if(turnedTiles.length && turnedTiles.length === 2){
			if(turnedTiles[0].value === turnedTiles[1].value){		
				return this.props.dispatch(fixSlide([turnedTiles[0].index,turnedTiles[1].index]))
			}
			setTimeout(
				function(){this.props.dispatch(hideAll(1))}.bind(this),			
				1000
			)
			return
		}				
	}				
}	

export default connect(mapStateToProps)(Game)