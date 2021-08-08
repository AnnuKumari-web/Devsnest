import React from 'react'
import { user1,email1,password1 } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

function Form() {
  const user = useSelector(state => state.user.user)
  const email = useSelector(state => state.email.email)
  const password = useSelector(state => state.password.password)
  const dispatch = useDispatch()
  return (
    <div className="form">
      <h1 style={{textAlign:"center"}}>Login/SignUp</h1>
      <div className="form-group">
        <label for="">UserName: </label>
        <input type="text" className="form-control" name="" id="" placeholder="Enter you Username" onChange={(e) => dispatch(user1(e.target.value))} />
        <div>{user}</div>
      </div>
      <div className="form-group">
        <label for="">Email: </label>
        <input type="email" className="form-control" name="" id="" placeholder="Enter your email id" onChange={(e) => dispatch(email1(e.target.value))}/>
        <div>{email}</div>
      </div>
      <div className="form-group">
        <label for="">Password: </label>
        <input type="password" className="form-control" name="" id="" placeholder="Enter your Password" onChange={(e) => dispatch(password1(e.target.value))}/>
        <div>{password}</div>
      </div>
    </div>
  )
}

export default Form;
