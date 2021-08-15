import { PLACE_DATA} from '../Actions/actionTypes'

const placedataReducer =(state="",action)=>{
  switch(action.type){

    case PLACE_DATA: 
    return action.payload;

    default: 
    return state
  }
}

export {placedataReducer};