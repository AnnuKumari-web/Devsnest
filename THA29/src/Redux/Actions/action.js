import { PLACE, PLACE_DATA, TOGGLE_THEME } from './actionTypes';

const setPlace = (place) => {
  return {
    type: PLACE,
    payload: place
  }
}

const setPlacedata = (place) => {
  return (dispatch) => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=68f4ec6f0f5b49f3a6185525211208&q=${place}&days=3`)
      .then((res) => res.json())
      .then((data) => {
        return dispatch({
          type: PLACE_DATA,
          payload: data
        });
      })
  }
}

const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  }
}

export {setPlace,setPlacedata,toggleTheme};