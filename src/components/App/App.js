import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import axios from "axios";
import Header from "../Header/Header";
import SignIn from "../Header/SignIn";
import SignUp from "../Header/SignUp";
import ProfileContainer from "../Profile/ProfileContainer";
import AdminContainer from "../UserAdmin/AdminContainer";
import FrontPageContainer from "../FrontPage/FrontPageContainer";
import CategoryContainer from "../Category/CategoryContainer";
import ArticleContainer from "../Article/ArticleContainer";
import Footer from "../Footer/Footer";
import "./App.css";

class App extends Component {
  state = {
    user: [],
    loggedIn: false,
    password: ""
  };

  componentDidMount() {
    const user = localStorage.user ? JSON.parse(localStorage.user) : "";
    localStorage.token
      ? this.setState({
          loggedIn: true,
          user: user
        })
      : this.setState({ loggedIn: false });
    console.log(localStorage);
  }
  // Handle Form Input
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // Registration
  handleSignUp = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/signup", {
        displayName: this.state.displayName,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        let user = res.data.user;
        localStorage.setItem("token", res.data.signedJWT);
        localStorage.setItem("user", JSON.stringify(user));
        this.setState({
          user: user,
          loggedIn: true,
          password: ""
        });
        console.log(this.state.user);
      })
      .catch(err => console.error(err));
  };
  // Log In
  handleLogIn = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        let user = res.data.user;
        localStorage.setItem("token", res.data.signedJWT);
        localStorage.setItem("user", JSON.stringify(user));
        this.setState({
          user: user,
          loggedIn: true,
          password: ""
        });
        console.log(this.state.user);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // Log Out
  handleLogOut = e => {
    e.preventDefault();
    this.setState({
      loggedIn: false
    });
    localStorage.clear();
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        <Header handleLogOut={this.handleLogOut} />
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
                    <ProfileContainer user={user} />
                  </div>
                );
              }}
            />
            <Route
              path="/admin"
              render={() => {
                return (
                  <div>
                    <AdminContainer user={user} />
                  </div>
                );
              }}
            />
            <Route
              path="/signin"
              render={() => {
                return (
                  <div>
                    <SignIn
                      handleInput={this.handleInput}
                      handleLogin={this.handleLogIn}
                    />
                  </div>
                );
              }}
            />
            <Route
              path="/signup"
              render={() => {
                return (
                  <div>
                    <SignUp
                      handleInput={this.handleInput}
                      handleSignUp={this.handleSignUp}
                    />
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
            <Route
              path="/articles/article"
              render={() => {
                return (
                  <div>
                    <ArticleContainer user={user} />
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
