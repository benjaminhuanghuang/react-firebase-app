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
import Users from './pages/Users';

//-- Router
import ProfileRedirect from "./router/ProfileRedirect"; 
import PrivateRoute from './router/PrivateRoute';
import AdminRoute from './router/AdminRoute';

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
              <PrivateRoute exact path="/profile/:id" component={Profile} />
              <AdminRoute exact path="/users" component={Users} />
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
