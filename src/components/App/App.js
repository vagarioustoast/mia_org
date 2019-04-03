import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import axios from "axios";
import Header from "../Header/Header";
import FrontPage from "../FrontPage/FrontPage";
import ProfileContainer from "../Profile/ProfileContainer";
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
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
