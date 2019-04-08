import React, { Component } from "react";
import Profile from "./Profile";
import axios from "axios";

export default class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <Profile user={this.props.user} />
      </div>
    );
  }
}
