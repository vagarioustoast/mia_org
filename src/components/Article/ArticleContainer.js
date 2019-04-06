import React, { Component } from "react";
import Article from "./Article";
import axios from "axios";

export default class ArticleContainer extends Component {
  state = {
    article: []
  };

  componentDidMount() {
    axios.get(`http://localhost:3001${window.location.pathname}`).then(res => {
      this.setState({
        article: res.data
      });
      console.log(res);
    });
  }

  render() {
    const { article } = this.state;
    const displayArticle = article.map(article => {
      return (
        <article className="athelas" key={article._id}>
          <div
            className="vh-100 dt w-100 tc bg-dark-gray white cover"
            style={{
              background: `url(http://mrmrs.github.io/photos/u/009.jpg), no-repeat, center`
            }}
          >
            <div className="dtc v-mid">
              <header className="white-70">
                <h2 className="f6 fw1 ttu tracked mb2 lh-title">Issue Six</h2>
                <h3 className="f6 fw1 lh-title">{article.category}</h3>
              </header>
              <h1 className="f1 f-headline-l fw1 i white-60">
                {article.title}
              </h1>
              <blockquote className="ph0 mh0 measure f4 lh-copy center">
                <p className="fw1 white-70">{article.author.name}</p>
                <cite className="f6 ttu tracked fs-normal">
                  Source: {article.source}
                </cite>
              </blockquote>
            </div>
          </div>
          <div className="center measure-wide f5 pv5 lh-copy ph2">
            {/* <h1 className="f1 lh-title">{article.title}</h1> */}
            {article.content}
          </div>
        </article>
      );
    });

    return (
      <div>
        <Article displayArticle={displayArticle} />
      </div>
    );
  }
}
