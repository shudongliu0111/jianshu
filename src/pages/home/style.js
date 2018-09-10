import styled from 'styled-components'

export const HomeWraper = styled.div`
	overflow:hidden;
	width:960px;
	margin: 0 auto;
	

`
export const HomeLeft = styled.div`
	width:625px;
	margin-left:15px;
	padding-top:30px;
	float:left;
	
	.banner-img{
		width:625px;
		height:270px;
	}
	

` 
export const HomeRight = styled.div`
	width:280px;
	float:right;

`
export const TopicWrapper = styled.div`
	overflow:hidden;
	padding: 20px 0 10px 0;
	margin-left:-18px;
	border-bottom: 1px solid #dcdcdc;
`
export const TopicItem =styled.div`
	float:left;
	height:32px;
	padding-right:10px;
	margin-left:18px;
	margin-bottom:18px;
	line-height:32px;
	background:#f7f7f7;
	font-size:14px;
	color:#000;
	border:1px solid #dcdcdc;
	border-radius:4px;

	.topic-pic{
		float:left;
		width:32px;
		height32px;
		margin-right:10px;
	}

`
export const ListItem = styled.div`
	padding:20px 0;
	border-bottom:1px solid #dcdcdc;
	overflow:hidden;
	.pic{
		display:block;
		width:125px;
		height:100px;
		float:right;
		border-radius:3px;
	}

`
export const ListInfo = styled.div`
	width:500px;
	float:left;
	.title{
		line-height:27px;
		font-size:18px;
		font-weight:bold;
		color:#333;
	}
	.desc{
		color:#999;
		line-height:24px;
		font-size:14px;
	}
`

export const RecommendWrap = styled.div`
	margin:30px 0;
	width:280px;
`

export const RecommendItem = styled.div`
	width:280px;
	height:50px;
	border-radius:5px;
	margin-bottom:10px;
	line-height:50px;
	padding-left:10px;
	font-size:17px;
	color:#fff;
	box-sizing:border-box;
	background: ${(props)=>props.color}
`