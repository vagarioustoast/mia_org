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
        {/* Edit Profile Information */}
        <h4> Edit your Profile </h4>
        <form
          className="pa4 black-80"
          method="POST"
          action={`http://localhost:3001/users/update/${user._id}`}
        >
          <label>
            <input
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              placeholder={user.displayName}
            />
          </label>
          <label>
            <input
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              placeholder={user.avatarUrl ? user.avatarUrl : "Avatar url"}
            />
          </label>
          <label>
            <textarea
              className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
              placeholder={
                user.description ? user.description : "Describe yourself"
              }
            />
          </label>
          <button
            className="f6 link dim ph3 pv2 mb2 dib white bg-black"
            href="#0"
          >
            Edit
          </button>
        </form>
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
