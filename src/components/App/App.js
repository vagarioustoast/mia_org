import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import axios from "axios";
import Header from "../Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body">
          <Switch>
            <Route exact path="/" render={() => {}} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
