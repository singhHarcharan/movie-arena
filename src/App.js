// Firebase provides authentication, database, cloud services etc. given by Google.

// Authentication : FIREBASE (Google Level Security).


// Subscription's Payments with STRIPE : Firebase' Stripe Extension 


// REDUX (Database) : It is used to store credential and subscription of users

// Also, Used to solve the Problem of Prop. Drilling.
//         What is Prop. Drilling ?
// When we pass Properties from one component to another and so on...
// It becomes difficult for someone to get the value in O(1) time, coz will flow line by line.
// To avoid this problem, we use Variables to every Prop in a Component to get that value of info in O(1).
// Hence, Redux is a Global store which store this information so that it can be accessible in any of the
// Component without traversing line by line.
// For More Details, of one line, Go to  ("src" >> "features" >> "userSlice.js").

// For Practical Example of Redux, Read Code of Two new actions "login" & "logout" in
// ("src" >> "features" >> "userSlice.js")

import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

// // In order to have different screens or different pages like HOMEPAGE,
// // PAYMENT PAGE etc. we need to have react router
function App() {
  // Instead of Hard Coding if value == null, use "Selector" stored in
  // userSlice.js and pick the value of user from that file where we have set default
  // value of user NULL when No user Has signed Up.
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // By using [] these brackets in the end, it runs on the mount.
  // onAuthStateChanged acts as event listener.
  // when state changes, it store its credential in its local memory.
  // to avoid relogging in process at user side.
  useEffect(() => {
    // variable is used to avoid multiple logged in.
    // means at the end, it will only return current logged in user
    // instead of previous one alongwith current.
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      // If there is Authoried user, it will dispatch its credentials to Global store
      // To retain the Logged in Feature. Hence, User can get rid of log in again & again.
      if (userAuth) {
        // Logged in
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">

      {/* 
      InStead of Using GitBash
      Use npm PowerShell to route these components. 
      */}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>

            <Route path="/profile">
              <ProfileScreen />
              </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>

          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
