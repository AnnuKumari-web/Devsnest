import React,{useContext} from 'react';
import Context from '../AuthContext';

const About=()=>{
  const logger = useContext(Context)
  return(
    <div>
    <h1>About me</h1>
    <div>{logger.loggedIn?"You are logged in.":"You are logged out."}</div>
    </div>
  );
}

export default About;