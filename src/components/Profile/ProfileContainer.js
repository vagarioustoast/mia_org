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
      // .get(`http://localhost:3001/annotations/profile/${profileId}`)
      .get(`http://localhost:3001/annotations/all`)
      .then(res => {
        console.log(res.data);
        this.setState({
          annotations: res.data
        });
      });
  }

  render() {
    const user = this.props.user;
    const { annotations } = this.state;
    console.log(annotations);
    const userAnnotations = annotations.filter(
      annotation => annotation.user._id === user._id
    );
    const annotationsList = userAnnotations
      ? userAnnotations.map(annotation => {
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
