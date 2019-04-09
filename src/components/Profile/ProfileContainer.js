import React, { Component } from "react";
import Profile from "./Profile";
import axios from "axios";

export default class ProfileContainer extends Component {
  // async componentDidMount() {
  //   const user = this.props.user;
  //   console.log(user);
  //   const res = await fetch(`http://localhost:3001/annotations/${user._id}`);
  //   const annotations = await res.json();
  //   console.log(annotations);
  // }

  render() {
    return (
      <div>
        <Profile user={this.props.user} />
      </div>
    );
  }
}
