import React from 'react'
import { connect } from 'react-redux'
import {actionCreator} from './store'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWraper} from './style.js'
import { CSSTransition } from 'react-transition-group';

const Header =(props)=>{
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
							in={props.focused}
							timeout={200}
							classNames='slide'
						>
							<NavSearch 
								className={props.focused ? 'focused':''}
								onFocus={props.handleInputFocus}
								onBlur={props.handleInputBlur}
							/>
						</CSSTransition>
						<i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe6cf;</i>
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

const mapStateToProps = (state)=>{
	return{
		focused:state.get('header').get('focused')
	}
}
const mapDispatchToProps = (dispatch)=>{
	return{
		handleInputFocus(){
			dispatch(actionCreator.searchFocus())
		},
		handleInputBlur(){
			// 使用actoncreater
			dispatch(actionCreator.searchBlur())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);