import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} 
from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import {AuthContext} from './AuthContext';

function App(){
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/profile">Profile</Link>
          </li>
          <li>
          <Link to="/dashboard">Dashboard</Link>
          </li>
          </ul>
        </nav>
<hr/>

        <Switch>
          <AuthContext>
          <Route exact path="/about" component={About} />
            
       
          <Route exact path="/dashboard"
          component={Dashboard} />
      
          <Route exact path="/profile"
          component={Profile} />
       
          <Route exact path="/"
          component={Home} />
         
          </AuthContext>
      
        </Switch>

      </div>
    </Router>
  );
}

export default App;
