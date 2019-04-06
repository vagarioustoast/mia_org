import React, { Component } from "react";
import "./FrontPage.css";

export default class FrontPage extends Component {
  render() {
    return (
      <div className="page-container">
        <div>
          <div>
            <div className="mw9 center ph3-ns">
              <div className="cf ph2-ns">
                {/* Left Side */}
                <div className="fl w-100 w-60-ns pa2 center">
                  {/* Article */}
                  {this.props.articlesList}
                </div>
                {/* Right Side */}
                <div className="fl w-100 w-40-ns pa2" />
              </div>
            </div>
          </div>
        </div>
        <section id="about">
          <h1>About Section</h1>
        </section>
      </div>
    );
  }
}
