import {createStore, compose,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
/* eslint-disable no-underscore-dangle */
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)
  ));

 /* eslint-enable */
export default store;