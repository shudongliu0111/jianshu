import * as actionTypes from './constants'
const defaultState = {
	focused:false
}

export default (state=defaultState,action)=>{
	if (action.type===actionTypes.SEARCH_FOCUS) {
		const newState = {...state}
		newState.focused = true
		return newState
	}
	if (action.type===actionTypes.SEARCH_BLUR) {
		const newState = {...state}
		newState.focused = false
		return newState
	}
	return state;
}
