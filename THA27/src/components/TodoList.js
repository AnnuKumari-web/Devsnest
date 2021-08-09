import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeTodo} from "../redux/actions/action";

function TodoList() {
  const todos = useSelector((state) => state.todo)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>My TodoList</h2>

      {todos.map((todo,index) => (
        <div key={index} className="todolist">
          <h5 style={{ display: "inline",padding:"5px" }}>{todo.title}</h5>
          <button className="del-btn" onClick={()=>{
            dispatch(removeTodo(index))
          }}>Delete</button>
        </div>
      ))}

    </div>

  )
}

export default TodoList;
