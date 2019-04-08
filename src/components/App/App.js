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
    displayName: "",
    email: "",
    password: ""
  };

  componentDidMount() {
    localStorage.token
      ? this.setState({ loggedIn: true })
      : this.setState({ loggedIn: false });
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
        localStorage.setItem("token", res.data.signedJWT);

        this.setState({
          user: res.data.user,
          loggedIn: true
        });
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
        localStorage.setItem("token", res.data.signedJWT);
        this.setState({
          user: res.data.user,
          loggedIn: true,
          displayName: res.data.user.displayName,
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
                    <AdminContainer
                      user={user}
                      handleInput={this.handleInput}
                    />
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
