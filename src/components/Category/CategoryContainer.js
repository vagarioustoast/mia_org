import React, { Component } from "react";
import Category from "./Category";
import axios from "axios";

export default class CategoryContainer extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get(`http://localhost:3001${window.location.pathname}`).then(res => {
      console.log(res.data);
      this.setState({
        articles: res.data
      });
    });
  }

  render() {
    const { articles } = this.state;
    const categoryArticles = articles.map(article => {
      return (
        <article className="pv4 bt bb b--black-10 ph3 ph0-l" key={article._id}>
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-90-ns pr3-ns order-2 order-1-ns">
              <h1 className="f3 athelas mt0 lh-title">{article.title}</h1>
              <p className="f5 f4-l lh-copy athelas">
                {article.content.slice(0, 200)}...
              </p>
            </div>
          </div>
          <p className="f6 lh-copy gray mv0">
            By <span className="ttu">{article.author.name}</span>
          </p>
          <time className="f6 db gray">{article.pubDate}</time>
        </article>
      );
    });
    return (
      <div>
        <section className="mw7 center">
          <h2 className="athelas ph3 ph0-l">News</h2>
          <Category categoryArticles={categoryArticles} />
        </section>
      </div>
    );
  }
}
