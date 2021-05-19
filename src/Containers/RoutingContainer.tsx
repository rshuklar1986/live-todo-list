import firebase from 'firebase';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import PasswordReset from '../Components/PasswordReset';
import ProfilePage from '../Components/ProfilePage';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import { UserContext } from '../Providers/UserProvider';

const RoutingContainer = (props: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.app().auth().onAuthStateChanged((userAuth: any) => {
      setUser(userAuth);
    });
  }, []);

  useEffect(() => {
  console.log("USERXXXXXX", user)
  }, [user]);
  return (
    user ?
      <ProfilePage/>
      :
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/signUp">
            <SignUp/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/passwordReset">
            <PasswordReset/>
          </Route>
        </Switch>
      </Router>

  );
};

export default RoutingContainer;
