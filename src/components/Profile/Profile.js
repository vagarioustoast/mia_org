import React, { Component } from "react";
import axios from "axios";

export default class Profile extends Component {
  state = {};
  // Handle Form Input
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  editProfile = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/users/update/${this.props.user._id}`, {
        displayName: this.state.displayName
          ? this.state.displayName
          : this.props.user.displayName,
        avatarUrl: this.state.avatarUrl
          ? this.state.avatarUrl
          : this.props.user.avatarUrl,
        description: this.state.description
          ? this.state.description
          : this.props.user.description
      })
      .then(res => {
        console.log(res);
      });
  };
  render() {
    const user = this.props.user;
    return (
      <div className="measure center">
        <h2>{user.displayName}</h2>
        <figure>
          <img
            src={
              user.avatarUrl
                ? user.avatarUrl
                : `https://pbs.twimg.com/media/CyjhJzHWQAkwG7e.png`
            }
            className="h5 w5"
            alt="user"
          />
        </figure>
        <h3>"{user.description}"</h3>
        {/* Edit Profile Information */}
        <form className="pa4 black-80">
          <h4> Edit your Profile </h4>
          <label>
            <input
              name="displayName"
              className="input-reset ba b--black pa2 mb2 db w-100"
              placeholder={user.displayName}
              onChange={this.handleInput}
            />
          </label>
          <label>
            <input
              name="avatarUrl"
              className="input-reset ba b--black pa2 mb2 db w-100"
              placeholder="New Avatar url"
              onChange={this.handleInput}
            />
          </label>
          <label>
            <textarea
              name="description"
              className="db border-box hover-black w-100 measure ba b--black pa2 br2 mb2"
              placeholder={
                user.description ? user.description : "Describe yourself"
              }
              onChange={this.handleInput}
            />
          </label>
          <button
            className="f6 link dim ph3 pv2 mb2 dib white bg-black"
            href="#0"
            onClick={this.editProfile}
          >
            Edit
          </button>
        </form>

        <div className="annotations">
          <h3 className="red">{user.displayName}'s Contributions</h3>
          {this.props.annotationsList}
        </div>
      </div>
    );
  }
}
