import { combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from "../common/header/store"
// 使用combineReducers 组合reducer 防止reducer过多
export default combineReducers({
	header: headerReducer
})