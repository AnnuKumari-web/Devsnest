import { incNum, decNum } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const Container = () => {
  const num1 = useSelector(state => state.incdecReducer.num1)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Increment/Decrement</h1>
      <button onClick={() => dispatch(incNum())}>+</button>
      <div>Number : {num1}</div>
      <button onClick={() => dispatch(decNum())}>-</button>
    </div>
  )
}


export default Container;