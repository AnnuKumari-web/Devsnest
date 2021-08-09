import React from 'react'
import { addTodo,loadTodo } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import {useState} from 'react'

function Todo() {
  const dispatch = useDispatch()
  const [item,setItem]=useState("");
  return (
    <div className="form">
      <h1 style={{textAlign:"center"}}>Add a todo to the TodoList</h1>
      <div className="form-group">
        <label for="">Title: </label>
        <input type="text" value={item} className="title" placeholder="Enter the title of you task" onChange={(e)=>setItem(e.target.value)}/>
        <div>{item}</div>
      </div>
      {/* <div className="form-group">
        <label for="">Status: </label>
        <input type="checkbox" className="status" />
      </div> */}
      <button onClick={()=>{
        dispatch(addTodo(
          {
            title:item,
            done:false
          }
        ));
        setItem("");
      }}
      >Add Todo</button>
      <button onClick={()=>{
        dispatch(loadTodo());
      }}>LOAD TODOS</button>
    </div>
  )
}

export default Todo;