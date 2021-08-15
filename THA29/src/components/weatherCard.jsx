import { useSelector } from 'react-redux';
import ToggleTheme from './ToggleTheme';

const WeatherCard =()=>{
  const placedata=useSelector((state) => state.placedata);
  const theme = useSelector((state) => state.theme);

  return(
    <div>
      {placedata.location ? (
        <div className={theme ? "container dark" : "container"}>
          <h1 className="heading">WeatherApp</h1>
          <span className="place">{placedata.location.name}</span><span className="feh"> {placedata.location.region}</span>
          <div className="date">{placedata.location.localtime}</div>
          <div><img className="image" src={placedata.current.condition.icon} alt="climate update" /></div>
          <span className="temp">{placedata.current.temp_c}°C</span><span className="feh">  {placedata.current.temp_f} F</span>

          <br/>
          <div className="desc">{placedata.current.condition.text}</div>

          <div className="flex">
            <div className="flex-container">
              <span className="tempC">{placedata.current.wind_kph}</span>
              <span className="small">kmph</span>
              <h4>Wind Speed</h4>
            </div>
            <div className="flex-container">
              <span className="tempC">{placedata.current.humidity}</span>
              <span className="small">%</span>
              <h4>Humidity</h4>
            </div>
            <div className="flex-container">
              <span className="tempC">{placedata.current.precip_mm}</span>
              <span className="small">mm</span>
              <h4>Precipitation</h4>
            </div>
          </div>

          <div className="flex">
            <div className="flex-container">
              <img className="icons" src={placedata.forecast.forecastday[0].day.condition.icon} />
              <div className="tempC">{placedata.forecast.forecastday[0].day.mintemp_c}°C/{placedata.forecast.forecastday[0].day.maxtemp_c}°C</div>
              <div className="daywise">{placedata.forecast.forecastday[0].date}</div>
            </div>
            <div className="flex-container">
              <img className="icons" src={placedata.forecast.forecastday[1].day.condition.icon} />
              <div className="tempC">{placedata.forecast.forecastday[1].day.mintemp_c}°C/{placedata.forecast.forecastday[1].day.maxtemp_c}°C</div>
              <div className="daywise">{placedata.forecast.forecastday[1].date}</div>
            </div>
            <div className="flex-container">
              <img className="icons" src={placedata.forecast.forecastday[2].day.condition.icon} />
              <div className="tempC">{placedata.forecast.forecastday[2].day.mintemp_c}°C/{placedata.forecast.forecastday[2].day.maxtemp_c}°C</div>
              <div className="daywise">{placedata.forecast.forecastday[2].date}</div>
            </div>
          </div>
        </div>
      ) : (<div className="container">
        <br/>
        <h1>No data to Display</h1>
        <br/>
        <br/>
        <h2>Select Location to get Forecast</h2>
          </div>)}
    </div>
  )
}

export default WeatherCard;