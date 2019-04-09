import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <figure>
          <img src="#" alt="user" />
        </figure>
        <h2>Name</h2>
        <p>Biography</p>
        <div className="annotations">
          <h3>Name's contributions</h3>
          <p>Annotation</p>
          <p>Annotation</p>
          <p>Annotation</p>
          <p>Annotation</p>
        </div>
      </div>
    );
  }
}
