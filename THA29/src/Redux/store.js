import { createStore } from 'redux';
import { placeReducer } from './Reducers/placeReducer';
import { placedataReducer } from './Reducers/placedataReducer';
import { toggleReducer } from './Reducers/toggleReducer';
import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  place: placeReducer,
  placedata: placedataReducer,
  theme: toggleReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;