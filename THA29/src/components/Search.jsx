import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {setPlace,setPlacedata} from '../Redux/Actions/action'

const SearchBar=()=>{
  const place = useSelector((state) => state.place)
  const dispatch = useDispatch();
  return(
    <div className="searchbar">
        <input type="text" 
        value={place} onChange={(e)=>{
          dispatch(setPlace(e.target.value))
        }}
        ></input>
        <button onClick={dispatch(setPlacedata(place))} >Get Forecast</button>
      </div>
  )
}

export default SearchBar;