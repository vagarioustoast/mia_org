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
    });
  }

  render() {
    const { article } = this.state;
    const user = this.props.user;
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
              <h1 className="f1 f-headline-l fw1 i white-60">
                {article.title}
              </h1>
              <blockquote className="ph0 mh0 measure f4 lh-copy center">
                <h3 className="f6 fw1 lh-title">{article.category}</h3>
                <p className="fw1 white-70">{article.author.name}</p>
                <cite className="f6 ttu tracked fs-normal">
                  Source: {article.source}
                </cite>
              </blockquote>
            </div>
          </div>
          <div className="georgia center measure-wide f4 f4-l pv5 lh-copy ph2">
            {article.content}
          </div>
          <hr className="w-60" />
          {/* Author Card */}
          <h1>About {article.author.name}</h1>
          <article className="mw8 center bg-black br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <img
                src={
                  article.author.authorPicUrl ||
                  `https://pbs.twimg.com/media/CyjhJzHWQAkwG7e.png`
                }
                className="br-100 h4 w4 dib"
                title="Photo of a kitty staring at you"
                alt={article.author.name}
              />
              <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="lh-copy measure-center f4 white-80">
              {article.author.biography}
            </p>
          </article>
        </article>
      );
    });

    return (
      <div>
        <Article displayArticle={displayArticle} user={user} />
      </div>
    );
  }
}
