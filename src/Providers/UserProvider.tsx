import firebase from 'firebase';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({ user: null });
const UserProvider = (props: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.app().auth().onAuthStateChanged((userAuth: any) => {
      setUser(userAuth);
    });
  }, []);

  return (
    <UserContext.Provider value={{user: user}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;

