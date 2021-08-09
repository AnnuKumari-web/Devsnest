
import { createStore } from 'redux';
import { todoReducer} from './reducers/reducers';
import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  todo:todoReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;