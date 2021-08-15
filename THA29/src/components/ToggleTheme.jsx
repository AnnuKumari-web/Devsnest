import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../Redux/Actions/action';

const ToggleTheme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="toggle-theme">
      <button className={theme ? "btn btn-dark" : "btn btn-light"} onClick={() => {dispatch(toggleTheme())}}>
        {theme ? "Light" : "Dark"}</button>
    </div>
  )
}

export default ToggleTheme;