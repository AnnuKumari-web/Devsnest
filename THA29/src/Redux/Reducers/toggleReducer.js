import { TOGGLE_THEME } from '../Actions/actionTypes'

const toggleReducer =(state=false,action)=>{
  switch(action.type){
    case TOGGLE_THEME: 
    return !state

    default: 
    return state
  }
}

export {toggleReducer};