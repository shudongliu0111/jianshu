import * as constants from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'

const change_list = (data)=>({
	type: constants.CHANGE_LIST,
	data:fromJS(data),
	totalPage: Math.ceil(data.length/10)
})

export const searchFocus = ()=>({
	type: constants.SEARCH_FOCUS
})
export const searchBlur = ()=>({
	type: constants.SEARCH_BLUR
})

export const mouseEnter = ()=>({
	type: constants.MOUSE_ENTER
})

export const mouseLeave = ()=>({
	type: constants.MOUSE_LEAVE
})
export const changePage= (page)=>({
	type: constants.CHANGE_PAGE,
	page
})

export const getList =()=>{
	return (dispatch) =>{
		axios.get('./api/headerList.json').then((res)=>{
			const data = res.data
			dispatch(change_list(data.data))
		}).catch(()=>{
			console.log("接口没返回数据")
		})
	}
}
