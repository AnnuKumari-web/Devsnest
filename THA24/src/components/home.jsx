import React,{useContext} from 'react';
import Context from '../AuthContext';

const Home=()=>{
  const logger = useContext(Context)
  // const toggleLogin =()=>{
  //   logger.toggleLogin()
  // }
  return(
    <div>
        <h1>Home</h1>
    <div>Login to access Dashboard and Profile</div>
    {
    logger.loading?"Loading...":
    logger.loggedIn?
    <button onClick={logger.logout}>Logout</button>:
    <button onClick={logger.login}>Login</button>
  }
    </div>
  );
}

export default Home;