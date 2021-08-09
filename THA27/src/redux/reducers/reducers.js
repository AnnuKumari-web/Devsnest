import {ADD_TODO, REMOVE_TODO,LOAD_TODO } from "../actions/actionTypes"
//(previousState, action) => newState

const todoReducer =(state=[],action)=>{
  switch(action.type){
    case ADD_TODO: 
    return [...state, action.payload]
    
    case REMOVE_TODO: 
    return state.filter((item,index)=> index !==action.payload)

    case LOAD_TODO: 
    return action.payload.slice(0,10);

    default: 
    return state
  }
}

export {todoReducer};