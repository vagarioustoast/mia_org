import React, { Component } from "react";
import Profile from "./Profile";
import axios from "axios";

export default class ProfileContainer extends Component {
  state = {
    annotations: []
  };
  componentDidMount() {
    const profileId = JSON.parse(localStorage.user);
    console.log(profileId._id);
    axios
      .get(`http://localhost:3001/annotations/profile/${profileId}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          annotations: res.data
        });
      });
  }

  render() {
    const { annotations } = this.state;
    const annotationsList = annotations
      ? annotations.map(annotation => {
          return (
            <div key={annotation._id}>
              <div className="ba pa3">
                <p>
                  "{annotation.content}" --{" "}
                  <strong>{annotation.article.title}</strong>
                </p>
              </div>
              <br />
              <form
                method="POST"
                action={`http://localhost:3001/annotations/delete/${
                  annotation._id
                }`}
              >
                <button className="f6 link dim ph3 pv2 mb2 dib white bg-red">
                  Delete
                </button>
              </form>
            </div>
          );
        })
      : null;
    return (
      <div>
        <Profile user={this.props.user} annotationsList={annotationsList} />
      </div>
    );
  }
}
