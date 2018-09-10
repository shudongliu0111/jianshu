import React,{Component} from  'react'
import {connect} from 'react-redux'
import {TopicWrapper, TopicItem} from '../style'

class Topic extends Component {
	render(){
		return(
			<TopicWrapper>
			{
				this.props.list.map((item)=>{
					return(
						<TopicItem key={item.get("id")}>
							<img
								alt={item.get('title')}
								className= 'topic-pic'
								src={item.get('imgURL')} />
							{item.get('title')}
						</TopicItem>
						)
				})
			}
				

			</TopicWrapper>
		)
	}
}

const mapStateToProps =(state)=>({
	list:state.get("home").get("topicList")
});
// const mapDisPatchToProps=(dispatch)=>({

// })
export default connect(mapStateToProps,null)(Topic);