import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
//
import logo from "./logo.svg";
import "./App.css";
//
import "./firebase/config";
import { UserProvider } from "./firebase/UserProvider";
//-- UI
import Header from "./Header";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

//-- Router
import ProfileRedirect from "./router/ProfileRedirect";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Switch>
              <ProfileRedirect exact path="/signup" component={Signup} />
              <ProfileRedirect exact path="/login" component={Login} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
