import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import axios from "axios";
import Header from "../Header/Header";
import FrontPageContainer from "../FrontPage/FrontPageContainer";
import SignIn from "../Header/SignIn";
import SignUp from "../Header/SignUp";
import ProfileContainer from "../Profile/ProfileContainer";
import CategoryContainer from "../Category/CategoryContainer";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends Component {
  state = {
    user: "",
    loggedIn: false
  };

  handleLogIn = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        localStorage.token = res.data.signedJwt;
        this.setState({
          user: res.data.user,
          loggedIn: true
        });
        console.log(this.state.user);
      })
      .catch(err => {
        console.error(err);
      });
  };
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
                    <FrontPageContainer />
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
                    <SignIn handleLogin={this.handleLogIn} />
                  </div>
                );
              }}
            />
            <Route
              path="/signup"
              render={() => {
                return (
                  <div>
                    <SignUp />
                  </div>
                );
              }}
            />
            <Route
              path="/articles/category"
              render={() => {
                return (
                  <div>
                    <CategoryContainer />
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
