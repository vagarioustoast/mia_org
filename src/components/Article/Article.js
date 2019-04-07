import React, { Component } from "react";

export default class Article extends Component {
  state = {
    annotations: []
  };

  async componentDidMount() {
    const res = await fetch(`http://localhost:3001${window.location.pathname}`);
    const annotations = await res.json();
    this.setState({
      annotations: annotations
    });
    console.log(annotations);
  }

  render() {
    return <div>{this.props.displayArticle}</div>;
  }
}
