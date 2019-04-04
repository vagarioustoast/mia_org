import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import axios from "axios";
import Header from "../Header/Header";
import FrontPage from "../FrontPage/FrontPage";
import SignIn from "../Header/SignIn";
import SignUp from "../Header/SignUp";
import ProfileContainer from "../Profile/ProfileContainer";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div>
                    <FrontPage />
                  </div>
                );
              }}
            />
            <Route
              path="/profile"
              render={() => {
                return (
                  <div>
                    <ProfileContainer />
                  </div>
                );
              }}
            />
            <Route
              path="/signin"
              render={() => {
                return (
                  <div>
                    <SignIn />
                  </div>
                );
              }}
            />
            <Route
              path="/signup"
              render={() => {
                return (
                  <div>
                    <SignIn />
                  </div>
                );
              }}
            />
            <Route
              path="/articles/category"
              render={() => {
                return (
                  <div>
                    <Category />
                  </div>
                );
              }}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
