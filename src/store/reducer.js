import { combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from "../common/header/store"
import homeReducer from '../pages/home/store/reducer'
// 使用combineReducers 组合reducer 防止reducer过多
export default combineReducers({
	header: headerReducer,
	home:homeReducer
})