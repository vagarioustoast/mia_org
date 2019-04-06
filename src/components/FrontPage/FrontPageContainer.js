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
      this.setState({
        articles: res.data.slice(0, 3)
      });
    });
  }
  render() {
    const { articles } = this.state;
    const articlesList = articles.map(article => {
      return (
        <article className="center mw5 mw6-ns hidden ba mv4" key={article._id}>
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">
            {article.title}
          </h1>

          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">
              {article.content.slice(0, 150)}...
            </p>
            <h4 className="red"> by {article.author.name}</h4>
            <hr />
            <a href={"articles/article/" + article._id}>Read more</a>
          </div>
        </article>
      );
    });
    return (
      <div>
        <FrontPage articlesList={articlesList} />
      </div>
    );
  }
}
