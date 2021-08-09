import { ADD_TODO,REMOVE_TODO,LOAD_TODO } from "./actionTypes"

const addTodo = (item) => {
  return {
    type: ADD_TODO,
    payload: item

  }
}

const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id

  }
}

const loadTodo = () => {
  return (dispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>response.json())
    .then((todos)=>{
      return dispatch({
        type:"LOAD_TODO",
        payload: todos
      });
    })
  }
}

export { addTodo,removeTodo,loadTodo };