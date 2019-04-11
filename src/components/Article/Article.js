import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Article extends Component {
  state = {
    annotations: []
  };

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
  // Form Input
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addAnnotation = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/annotations/create", {
        user: this.props.user._id,
        article: this.props.location.pathname.split("/")[3],
        content: this.state.content
      })
      .then(res => {
        console.log(res);
      });
  };

  render() {
    const { annotations } = this.state;
    const displayAnnotations = annotations.map(annotation => {
      return (
        <article
          key={annotation._id}
          className="center mw5 mw6-ns hidden ba mv4"
        >
          <h1 className="f4 bg-near-black red mv0 pv2 ph3">
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
        <br />

        {/* Form */}
        <div className="measure center bg-black">
          <h1 className="white">
            Add an Annotation{" "}
            <span>
              <img
                src="https://pbs.twimg.com/media/CyjhJzHWQAkwG7e.png"
                className="br-100 h2 w2 dib"
                alt="avatar"
              />
            </span>
          </h1>
          <form className="pa4 black-80">
            <div className="measure">
              <label htmlFor="comment" className="white f6 b db mb2" />
              <textarea
                id="comment"
                name="content"
                className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                aria-describedby="comment-desc"
                onChange={this.handleInput}
              />
            </div>
            <a
              className="f6 link ba bw2 ph3 pv2 mb2 dib red"
              href="#0"
              onClick={this.addAnnotation}
            >
              Submit
            </a>
          </form>
        </div>
        <hr className="w-80" />
      </div>
    );
  }
}

export default withRouter(Article);
