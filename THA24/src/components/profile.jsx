import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Context from '../AuthContext'; const Profile = () => {

  const logger = useContext(Context)
  return (
    <div>
      <h1>Profile</h1>
      <Route>
        <div>{logger.loggedIn ? "Welcome to your Profile." : <Redirect path="/" />}</div>
      </Route>
    </div>
  );
}

export default Profile;