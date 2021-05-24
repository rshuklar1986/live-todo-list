import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import PasswordReset from '../components/PasswordReset';
import ProfilePage from '../components/ProfilePage';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const RoutingContainer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.app().auth().onAuthStateChanged((userAuth: any) => {
      setUser(userAuth);
    });
  }, []);

  useEffect(() => {
  }, [user]);
  return (
    user ?
      <ProfilePage user={user}/>
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
