import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-near-black white-80 pv5 pv6-l ph4">
          <p className="f6">
            <span className="dib mr4 mr5-ns">©2019 Marxists.org</span>
            <a className="link white-80 hover-light-purple" href="/terms">
              Terms
            </a>{" "}
            /
            <a className="link white-80 hover-gold" href="/privacy">
              {" "}
              Privacy{" "}
            </a>{" "}
            /
            <a className="link white-80 hover-green" href="#">
              max@horkheimer.com{" "}
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
