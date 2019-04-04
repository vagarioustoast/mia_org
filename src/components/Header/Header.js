import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          <a href="/">Marxist Internet Archive</a>
        </h1>
        <a href="/signin">Sign in</a>

        <nav>
          <hr />
          <ul>
            <li>
              <a href="/articles/category/First_International">
                First International
              </a>
            </li>
            <li>
              <a href="/articles/category/Western_Marxism">Western Marxism</a>
            </li>
            <li>
              <a href="/articles/category/Trotskyists">Trotskyists</a>
            </li>
            <li>
              <a href="/articles/category/Left_Communism">Left Communism</a>
            </li>
            <li>
              <a href="/articles/category/African_Liberation">
                African Liberation
              </a>
            </li>
            <li>
              <a href="/articles/category/Black_Liberation">Black Liberation</a>
            </li>
            <li>
              <a href="/articles/category/Feminists">Feminists</a>
            </li>
            <li>
              <a href="/articles/category/Philosophy">Philosophy</a>
            </li>
            <li>
              <a href="/articles/category/Ethics">Ethics</a>
            </li>
          </ul>
          <hr />
        </nav>
      </div>
    );
  }
}
