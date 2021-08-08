
import { createStore } from 'redux';
import { incdecReducer, userReducer,emailReducer,passwordReducer } from './reducers/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  incdecReducer: incdecReducer,
  user:userReducer,
  email:emailReducer,
  password:passwordReducer
})

const store = createStore(rootReducer)

export default store;