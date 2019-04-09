import React, { Component } from "react";
import Profile from "./Profile";
import axios from "axios";

export default class ProfileContainer extends Component {
  state = {
    annotations: []
  };
  async componentDidMount() {
    const res = await fetch("http://localhost:3001/annotations/all");
    const annotations = await res.json();
    console.log(annotations);
  }
  render() {
    return (
      <div>
        <Profile user={this.props.user} />
      </div>
    );
  }
}
