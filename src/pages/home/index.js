import React,{Component} from  'react'
import {HomeWraper,HomeRight,HomeLeft} from './style'

class Home extends Component {
	render(){
		return(
			<HomeWraper>
				<HomeLeft>123</HomeLeft>
				<HomeRight>456</HomeRight>
			</HomeWraper>
		)
	}
}

export default Home;