import React, { Component } from "react";
import FrontPage from "./FrontPage";
import axios from "axios";

export default class FrontPageContainer extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/articles/all").then(res => {
      console.log(res.data);
    });
  }
  render() {
    return (
      <div>
        <FrontPage />
      </div>
    );
  }
}
