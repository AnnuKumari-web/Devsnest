import React,{useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Context from '../AuthContext';

const Dashboard=()=>{
  const logger = useContext(Context)
  return(
    <div>
    <h1>Dashboard</h1>
    <Route>
    <div>{logger.loggedIn?"Welcome to the Dashboard.":<Redirect path="/"/>}</div>
    </Route>
    </div>
  );
}

export default Dashboard;