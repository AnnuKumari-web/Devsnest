import './App.css';
import { useSelector } from 'react-redux';
import WeatherCard from './components/weatherCard';
import SearchBar from './components/Search';
import ToggleTheme from './components/ToggleTheme';


function App() {
  const theme = useSelector((state)=>state.theme)
  return (
    <div className={theme ? "App dark" : "App"}>
        <ToggleTheme />
        <SearchBar />
        <WeatherCard />
    
    </div>
  );
}

export default App;
