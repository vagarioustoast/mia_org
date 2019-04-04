import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Category extends Component {
  render() {
    return (
      <div className="category-container">
        <article className="pv4 bt bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 athelas mt0 lh-title">
                Tech Giant Invests Huge Money to Build a Computer Out of Science
                Fiction
              </h1>
              <p className="f5 f4-l lh-copy athelas">
                The tech giant says it is ready to begin planning a quantum
                computer, a powerful cpu machine that relies on subatomic
                particles instead of transistors.
              </p>
            </div>
          </div>
          <p className="f6 lh-copy gray mv0">
            By <span className="ttu">author name</span>
          </p>
          <time className="f6 db gray">pubdate</time>
        </article>
      </div>
    );
  }
}
