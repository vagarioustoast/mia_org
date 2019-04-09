import React, { Component } from "react";
import axios from "axios";

export default class Admin extends Component {
  state = {
    title: "",
    pubDate: "",
    source: "",
    content: ""
  };
  // Add a Work
  addWork = e => {
    e.preventDefault();
    axios.post("http://localhost:3001/articles/create", {
      title: this.state.title,
      author: this.author,
      pubDate: this.state.pubDate,
      content: this.state.content,
      source: this.state.source
    });
  };
  render() {
    const handleInput = this.props.handleInput;
    return (
      <div>
        {/* Author Submission */}
        <div className="measure center">
          <h1>Add an Author</h1>
          <form className="pa4 black-80">
            <div className="measure">
              <label htmlFor="name" className="f6 b db mb2">
                Name <span className="normal black-60">(Required)</span>
              </label>
              <input
                id="name"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                name="name"
                aria-describedby="name-desc"
                onChange={handleInput}
              />
              <small id="name-desc" className="f6 black-60 db mb2">
                e.g, "Max Horkheimer"
              </small>
            </div>
            <div className="measure">
              <label htmlFor="name" className="f6 b db mb2">
                Life Span <span className="normal black-60">(Required)</span>
              </label>
              <input
                id="name"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                name="lifeSpan"
                aria-describedby="name-desc"
                onChange={handleInput}
              />
              <small id="name-desc" className="f6 black-60 db mb2">
                e.g, "1888-1945"
              </small>
            </div>
            <div className="measure">
              <label htmlFor="name" className="f6 b db mb2">
                Url Picture <span className="normal black-60">(Required)</span>
              </label>
              <input
                id="name"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                name="authorPicUrl"
                aria-describedby="name-desc"
                onChange={handleInput}
              />
              <small id="name-desc" className="f6 black-60 db mb2">
                Paste URL Here
              </small>
            </div>
            <div>
              <label htmlFor="comment" className="f6 b db mb2">
                Biography <span className="normal black-60">(Required)</span>
              </label>
              <textarea
                id="comment"
                name="content"
                className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                aria-describedby="comment-desc"
                onChange={handleInput}
              />
            </div>
            <a
              className="f6 link ba bw2 ph3 pv2 mb2 dib black"
              href="#0"
              onClick={this.addWork}
            >
              Submit
            </a>
          </form>
        </div>
        <div>
          {/* Article Submission */}
          <div className="measure center">
            <h1>Add an Article</h1>
            <form className="pa4 black-80">
              <div className="measure">
                <label htmlFor="name" className="f6 b db mb2">
                  Title <span className="normal black-60">(Required)</span>
                </label>
                <input
                  id="name"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  name="title"
                  aria-describedby="name-desc"
                  onChange={handleInput}
                />
                <small id="name-desc" className="f6 black-60 db mb2">
                  e.g, "The Work of Art in the Age of Mechanical Reproduction"
                </small>
              </div>
              <br />
              <div className="measure">
                <label htmlFor="name" className="f6 b db mb2">
                  Author <span className="normal black-60">(Required)</span>
                </label>
                <select>{this.props.authorList}</select>
                <small id="name-desc" className="f6 black-60 db mb2">
                  e.g, "Walter Benjamin"
                </small>
              </div>
              <br />
              <div className="measure">
                <label htmlFor="name" className="f6 b db mb2">
                  Publication Date{" "}
                  <span className="normal black-60">(Required)</span>
                </label>
                <input
                  id="name"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  name="pubDate"
                  aria-describedby="name-desc"
                  onChange={handleInput}
                />
                <small id="name-desc" className="f6 black-60 db mb2">
                  e.g, "1888"
                </small>
              </div>
              <div className="measure">
                <label htmlFor="name" className="f6 b db mb2">
                  Source <span className="normal black-60">(Required)</span>
                </label>
                <input
                  id="name"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  name="source"
                  aria-describedby="name-desc"
                  onChange={handleInput}
                />
                <small id="name-desc" className="f6 black-60 db mb2">
                  e.g, "1888"
                </small>
              </div>
              <div className="measure">
                <label htmlFor="name" className="f6 b db mb2">
                  Category <span className="normal black-60">(Required)</span>
                </label>
                <input
                  id="name"
                  className="input-reset ba b--black-20 pa2 mb2 db w-100"
                  type="text"
                  name="category"
                  aria-describedby="name-desc"
                  onChange={handleInput}
                />
                <small id="name-desc" className="f6 black-60 db mb2">
                  e.g, "Philosophy"
                </small>
              </div>
              <div>
                <label htmlFor="comment" className="f6 b db mb2">
                  Content <span className="normal black-60">(Required)</span>
                </label>
                <textarea
                  id="comment"
                  name="content"
                  className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                  aria-describedby="comment-desc"
                  onChange={handleInput}
                />
              </div>
              <a
                className="f6 link ba bw2 ph3 pv2 mb2 dib black"
                href="#0"
                onClick={this.addWork}
              >
                Submit
              </a>
            </form>
          </div>

          {/* Displays User List */}
          <h1>Users</h1>
          <div className="pa5">
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="f4 fw6  b--black-20 tl pb3 pr3 bg-white">
                      Username
                    </th>
                    <th className="f4 fw6 b--black-20 tl pb3 pr3 bg-white">
                      Email
                    </th>
                    <th className="f4 fw6 b--black-20 tl pb3 pr3 bg-white">
                      Admin?
                    </th>
                  </tr>
                </thead>
                <tbody className="l1-copy">{this.props.userList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
