import { INC_NUM,DEC_NUM,USER,EMAIL,PASSWORD } from "../actions/actionTypes"
//(previousState, action) => newState

const initialNum1State ={
  num1 : 100
}

const initialUserState={
  user: " "
}

const initialEmailState={
  email: " "
}

const initialPasswordState={
  password: " "
}

const incdecReducer =(state = initialNum1State,action)=>{
  switch(action.type){
    case INC_NUM: return {
      ...state,
      num1: state.num1 + 1 
    }
    case DEC_NUM: return {
      ...state,
      num1: state.num1 - 1
    }
    default: return state
  }
}

const userReducer = (state = initialUserState,action)=>{
  switch(action.type){
    case USER: return {
      ...state,
      user: action.payload
    }
    default: return state
  }
}

const emailReducer = (state = initialEmailState,action)=>{
  switch(action.type){
    case EMAIL: return {
      ...state,
      email: action.payload
    }
    default: return state
  }
}

const passwordReducer = (state = initialPasswordState,action)=>{
  switch(action.type){
    case PASSWORD: return {
      ...state,
      password: action.payload
    }
    default: return state
  }
}


export {incdecReducer,userReducer,emailReducer,passwordReducer};