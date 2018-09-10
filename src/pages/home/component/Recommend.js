import React,{Component} from  'react'
import {connect } from "react-redux"
import {RecommendWrap,RecommendItem} from '../style.js'

class Recommend extends Component {
	render(){
		return(
			<RecommendWrap>
			{
				this.props.list.map((item)=>{
					return (
						<RecommendItem color={item.get("color")} key={item.get("id")}>
						{item.get("title")}
						</RecommendItem>
					)							
				})
			}
				
			</RecommendWrap>
		)
	}
}
const mapStateToProps = (state)=>({
	list:state.getIn(['home','recommendList'])
})
export default connect(mapStateToProps,null)(Recommend);