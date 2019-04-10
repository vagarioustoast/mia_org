import React, { Component } from "react";

export default class Article extends Component {
  render() {
    console.log(this.props.Key);
    return (
      <div>
        {this.props.displayArticle}

        <h1 className="red-80">Annotations</h1>
        {this.props.displayAnnotio}
      </div>
    );
  }
}
