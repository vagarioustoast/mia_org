import React, { Component } from "react";
import axios from "axios";

export default class Profile extends Component {
  render() {
    const user = this.props.user;
    return (
      <div className="measure center">
        <figure>
          <img
            src={
              user.avatarUrl ||
              `https://pbs.twimg.com/media/CyjhJzHWQAkwG7e.png`
            }
            className="h3 w3"
            alt="user"
          />
        </figure>
        <a className="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">
          Edit
        </a>
        <h2>{user.displayName}</h2>
        <p>{user.description}</p>
        <div className="annotations">
          <h3 className="red">{user.displayName}'s Contributions</h3>
          {this.props.annotationsList}
        </div>
      </div>
    );
  }
}
