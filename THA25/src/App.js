import './App.css';
import Body from './components/body';
import Footer from './components/footer';
import Login from './components/form';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <Login/> */}
    <Home/>
    <Body/>
    <Footer/>
    </div>
  );
}

export default App;
