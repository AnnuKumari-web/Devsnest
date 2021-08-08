import { INC_NUM,DEC_NUM,USER,EMAIL,PASSWORD } from "./actionTypes"

const incNum=()=>{
  return {
    type: INC_NUM
  }
}

const decNum=()=>{
  return {
    type: DEC_NUM
  }
}

const user1 =(e)=>{
  return {
    type: USER,
    payload: e
  }
}
const email1 =(e)=>{
  return {
    type: EMAIL,
    payload: e
  }
}
const password1 =(e)=>{
  return {
    type: PASSWORD,
    payload: e
  }
}

export {incNum,decNum,user1,email1,password1};