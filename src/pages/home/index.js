import React,{Component} from  'react'
import {HomeWraper,HomeRight,HomeLeft} from './style'
import List from  './component/List'
import Recommend from  './component/Recommend'
import Topic from  './component/Topic'
import Write from  './component/Write'
import axios from "axios"
import {connect} from 'react-redux'

class Home extends Component {
	render(){
		return(
			<HomeWraper>
				<HomeLeft>
					<img 
						alt='banner'
						className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4424/28fa64c724d3d67bc47994c5b9e43b43474069d9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Write/>
				</HomeRight>
			</HomeWraper>
		)
	}
	componentDidMount(){
		this.props.changeHomeData()
	}
}
const mapDispatchToProps=(dispatch)=>({
	changeHomeData(){
		axios.get("/api/home.json").then((res)=>{
			const result =res.data.data;
			const action = {
				type:"change_home_dara",
				topicList: result.topicList,
				articleList:result.articleList,
				recommendList: result.recommendList
			}
			dispatch(action)
		})
		
	}
})

export default connect(null,mapDispatchToProps)(Home);