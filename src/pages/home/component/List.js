import React,{Component} from  'react'
import {connect } from 'react-redux'
import {ListItem,ListInfo} from '../style.js'

class List extends Component {
	render(){
		return(
			<div>
				{
					this.props.list.map((item)=>(
						<ListItem key={item.get("id")}>
							<img className="pic" src={item.get("imgURL")} alt="none" />
						<ListInfo>
							<h3 className="title">{item.get("title")}</h3>
							<p className="desc">
								 {item.get("desc")}
							</p>
						</ListInfo>
			</ListItem>
						))
				}			

			</div>
			
		)
	}
}
const mapStateToProps=(state)=>({
	list : state.get("home").get("articleList")
})
export default connect(mapStateToProps,null)(List);