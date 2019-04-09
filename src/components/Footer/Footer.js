import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-near-black white-80 pv5 pv6-l ph4">
          {" "}
          <a
            className="link white-60 hover-white"
            href="https://www.marxists.org/admin/legal/cc/by-sa.htm"
          >
            Creative Commons Deed
          </a>
          <p className="f6">
            <a className="link white-60 hover-white" href="/terms">
              Terms
            </a>{" "}
            /
            <a className="link white-60 hover-white" href="/privacy">
              {" "}
              Privacy{" "}
            </a>{" "}
            /
            <a className="link white-60 hover-white" href="marxists.org">
              max@horkheimer.com{" "}
            </a>
          </p>
          <span className="dib mr4 mr5-ns">©2019 Marxists.org</span>
        </footer>
      </div>
    );
  }
}
