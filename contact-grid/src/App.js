import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
//
import logo from "./logo.svg";
import "./App.css";
//
import Header from './Header';
import "./firebase/config";
import "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="app">
        <div className="ui grid container">
          <Switch>
            {/* <ProfileRedirect exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <ProfileRedirect exact path="/login" component={Login} />
            <AdminRoute exact path="/users" component={Users} /> */}
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
