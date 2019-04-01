import React, { Component } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Marxist Internet Archive</h1>
        <a href="#">Sign in</a>
        <a href="#">Register</a>
        <nav>
          <hr />
          <ul>
            <li>First International</li>
            <li>Western Marxism</li>
            <li>Trotskyists</li>
            <li>Left Communism</li>
            <li>African Liberation</li>
            <li>Black Liberation</li>
            <li>Feminists</li>
            <li>Philosophy</li>
            <li>Ethics</li>
          </ul>
          <hr />
        </nav>
      </div>
    );
  }
}
