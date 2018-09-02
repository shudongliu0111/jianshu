import React, {Component}from 'react'
import { connect } from 'react-redux'
import {actionCreator} from './store'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWraper,SearchInfo,SearchTitle,SearchSwitch,SearchInfoItem} from './style.js'
import { CSSTransition } from 'react-transition-group';


class Header extends Component {
	getListArea(){
		
		const newList = this.props.list.toJS()
		const pageList = [];
		if (newList.length) {
			// 同时满足了两个条件 这样循环就ok了
			for (var i = this.props.page*10; i < (this.props.page+1)*10 && i < newList.length; i++){
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}
		


		if (this.props.focused || this.props.mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={this.props.handleMouseEnter}
					// onMouseEnter={()=>{console.log(123)}}
					onMouseLeave={this.props.handleMouseLeave}
				>
						<SearchTitle>
							热门搜索
							<SearchSwitch onClick={()=>this.props.handleChangePage(this.props.page,this.props.totalPage,this.spinIcon)}>
								<i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
								换一换
							</SearchSwitch>
						</SearchTitle>
						<div>
							{pageList}
						</div>	
				</SearchInfo>
			)
		}
	}
	render(){
		return(
			<HeaderWrapper>
				<Logo/>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登录</NavItem>
					<NavItem className='right'>
						<i className='iconfont'>&#xe636;</i>
					</NavItem>
					<SearchWraper>
						<CSSTransition
							in={this.props.focused}
							timeout={200}
							classNames='slide'
						>
							<NavSearch 
								className={this.props.focused ? 'focused':''}
								onFocus={()=>{this.props.handleInputFocus(this.props.list)}}
								onBlur={this.props.handleInputBlur}
							/>
						</CSSTransition>
						<i className={this.props.focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe6cf;</i>
						{this.getListArea()}
					</SearchWraper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className='iconfont'>&#xe615;</i>
						写文章
					</Button>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		// 这两种都一样 是immutable提供的方法
		focused:state.get('header').get('focused'),
		mouseIn:state.getIn(['header','mouseIn']),
		list:state.getIn(['header','list']),
		page:state.getIn(['header','page']),
		totalPage:state.getIn(['header','totalPage'])

	}
}
const mapDispatchToProps = (dispatch)=>{
	return{
		handleInputFocus(list){
			 (list.size ===0) && dispatch(actionCreator.getList());
			// if (list.size ===0) {
			// 	dispatch(actionCreator.getList());
			// }
			
			
			dispatch(actionCreator.searchFocus());
		},
		handleInputBlur(){
			// 使用actoncreater
			dispatch(actionCreator.searchBlur())
		},
		handleMouseEnter(){
			// console.log(1)
			dispatch(actionCreator.mouseEnter())
		},
		handleMouseLeave(){
			// console.log(123)
			dispatch(actionCreator.mouseLeave())
		},
		handleChangePage(page,totalPage,spin){
			// 将非数字转换为空 就只有数字了
			let originAngle	= spin.style.transform.replace(/[^0-9]/ig, '')
			if (originAngle) {
				// 将字符串转换为number
				originAngle = parseInt(originAngle, 10)
			}else{
				originAngle = 0;
			}
			spin.style.transform= 'rotate('+(originAngle + 360)+'deg)'

			if (page < totalPage-1) {
				dispatch(actionCreator.changePage(page+1))
			}else{
				dispatch(actionCreator.changePage(0))
			}
			
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);