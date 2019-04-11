import React, { Component } from "react";
import Profile from "./Profile";
import axios from "axios";

export default class ProfileContainer extends Component {
  state = {
    annotations: []
  };
  componentDidMount() {
    axios
      .get(`http://localhost:3001/annotations/profile/${this.props.user._id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          annotations: res.data
        });
      });
  }

  render() {
    const { annotations } = this.state;
    const annotationsList = annotations.map(annotation => {
      return (
        <div key={annotation._id}>
          <div className="ba pa3">
            <p>
              "{annotation.content}" --{" "}
              <strong>{annotation.article.title}</strong>
            </p>
          </div>
          <br />
        </div>
      );
    });
    return (
      <div>
        <Profile user={this.props.user} annotationsList={annotationsList} />
      </div>
    );
  }
}
