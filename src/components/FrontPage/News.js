import React, { Component } from "react";
import axios from "axios";

export default class News extends Component {
  state = {
    outsideArticles: []
  };
  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=the-new-york-times, the-washington-post&apiKey=885e5c30d2c94efb907449c42ed70b10`
      )
      .then(res => {
        this.setState({
          outsideArticles: res.data.articles.slice(0, 8)
        });
      });
  }

  render() {
    const { outsideArticles } = this.state;
    const outsideArticle = outsideArticles.map((article, index) => {
      return (
        <article key={index} className="fl w-100 w-50-m w-25-ns pa2-ns">
          <div className="aspect-ratio aspect-ratio--1x1">
            <img
              style={{
                backgroundImage: `url(${article.urlToImage})`
              }}
              className="db bg-center cover aspect-ratio--object"
              alt=""
            />
          </div>
          <a href={article.url} className="ph2 ph0-ns pb3 link db">
            <h3 className="f5 f4-ns mb0 black-90 underline-hover">
              {article.title}
            </h3>
            <h3 className="f6 f5 fw3 mt2 black-60">
              {article.description.slice(0, 150)}...
            </h3>
          </a>
        </article>
      );
    });
    return <div>{outsideArticle}</div>;
  }
}
