import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        <figure>
          <img src={user.avatarUrl} alt="user" />
        </figure>
        <a className="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">
          Edit
        </a>
        <h2>{user.displayName}</h2>
        <p>{user.description}</p>
        <div className="annotations">
          <h3 className="red">{user.displayName}'s Contributions</h3>
          <p>Annotation</p>
          <p>Annotation</p>
          <p>Annotation</p>
          <p>Annotation</p>
        </div>
      </div>
    );
  }
}
