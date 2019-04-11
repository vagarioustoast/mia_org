import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Article extends Component {
  state = {
    annotations: []
  };

  componentDidReceiveProps;

  componentDidMount() {
    const articleId = this.props.location.pathname.split("/")[3];

    axios
      .get(`http://localhost:3001/annotations/article/${articleId}`)
      .then(res => {
        this.setState({
          annotations: res.data
        });
      });
  }

  render() {
    const { annotations } = this.state;
    const displayAnnotations = annotations.map(annotation => {
      return (
        <article
          key={annotation._id}
          className="center mw5 mw6-ns hidden ba mv4"
        >
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">
            {annotation.user.displayName}
          </h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{annotation.content}</p>
          </div>
        </article>
      );
    });
    return (
      <div>
        {this.props.displayArticle}

        <h1 className="red-80">Annotations</h1>
        {displayAnnotations}
      </div>
    );
  }
}

export default withRouter(Article);
