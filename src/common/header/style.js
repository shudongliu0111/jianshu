import styled from "styled-components"
import logoPic from "../../static/logo.png"

export const HeaderWrapper =styled.div`
	position: relative;
	height: 56px;
	border-bottom:1px solid #f0f0f0;

`;
// 可以定义在style 中也可以直接写在标签中
// url不能直接写在样式里面
export const Logo = styled.a.attrs({href:'/'})`
	position absolute;
	top:0;
	left0;
	display:block;
	width:100px;
	height:56px;
	background:url(${logoPic});
	background-size: contain;
`;
export const Nav = styled.div`
	
	width:960px;
	margin:0 auto;
	height:100%;
	padding-right:30px;
	box-sizing:border-box;
`
export const NavItem =styled.div`
	&.left{float:left}
	&.right{
		float:right;
		color:#969696;
	}
	&.active{color:#ea6f5a}
	font-size: 17px;
	padding:15px;
	height:26px;
	line-height:26px;
	color:#333;
`
export const SearchWraper = styled.div`
	
	float:left;
	position:relative;
	
	.zoom{
		position:absolute;
		right:5px;
		bottom:4px;
		height:30px;
		width:30px;
		border-radius:15px;
		text-align:center;
		line-height:30px;
		font-size:23px;
		color:#969696;
		&.focused{
			background:#999;
			color:#ffffffc2;
		}
	}
	
`
export const NavSearch = styled.input.attrs({placeholder:'搜索'})`
	width:160px;
	height:38px;
	border:none;
	outline:none;
	border-radius:19px;
	padding:0 35px 0 20px;
	box-sizing:border-box;
	margin-top:9px;
	margin-left:20px;
	background:#eee;
	font-size:14px;
	::&.placeholder{
		color:#999
	}
	&.focused{
		width:240px;
	}
	&.slide-enter{
		width:160px;
		transition:all .2s ease-out;
	}
	&.slide-enter-active{
		width:240px
	}
	&.slide-exit{
		transition:all .2s ease-out;
	}
	&.slide-exit-active{
		width:160px
	}

`
export const SearchInfo = styled.div`
	position:absolute;
	left:0;
	top:56px;
	width:240px;
	
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchTitle = styled.div`
	margin-top:20px;
	margin-bottom:15px;
	line-height:20px;
	font-size:14px;
	color:#969696;
	
`
export const SearchSwitch = styled.span`
	float:right;
	font-size:13px;
	.spin{
		display:block
		font-size:12px;
		margin-right:50px;
	}

`
export const SearchInfoItem = styled.a`
	display:block;
	float:left;
	font-size:12px;
	padding 0 5px;
	line-height:20px;
	border:1px solid #ddd;
	color:#787878;
	border-radius:2px
	margin-right:10px;
	margin-bottom:15px;
`
export const Addition = styled.div`
	position:absolute;
	right:0;
	top:0;
	height:56px;
`
export const Button =styled.div`
	float:right;
	line-height:38px;
	margin-top:8px;
	border:1px solid #ea6f5a;
	border-radius:19px;
	padding:0 20px;
	margin-right:20px;
	font-size:14px;
	&.reg{
		color:#ec6149
	}
	&.writting{color:#fff;background:#ec6149}
`