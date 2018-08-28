import {createStore, compose} from 'redux'
import reducer from './reducer'
/* eslint-disable no-underscore-dangle */
// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer)
 /* eslint-enable */
export default store;