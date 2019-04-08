import React, { Component } from "react";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <h2>Add Work</h2>
        <form className="pa4 black-80">
          <div className="measure">
            <label for="name" className="f6 b db mb2">
              Title <span className="normal black-60">(Required)</span>
            </label>
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
            />
            <small id="name-desc" className="f6 black-60 db mb2">
              e.g, "The Work of Art in the Age of Mechanical Reproduction"
            </small>
          </div>
          <div className="measure">
            <label for="name" className="f6 b db mb2">
              Author <span className="normal black-60">(Required)</span>
            </label>
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
            />
            <small id="name-desc" className="f6 black-60 db mb2">
              e.g, "Walter Benjamin"
            </small>
          </div>
          <div className="measure">
            <label for="name" className="f6 b db mb2">
              Publication Date{" "}
              <span className="normal black-60">(Required)</span>
            </label>
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
            />
            <small id="name-desc" className="f6 black-60 db mb2">
              e.g, "1888"
            </small>
          </div>
          <div>
            <label for="comment" class="f6 b db mb2">
              Content <span class="normal black-60">(optional)</span>
            </label>
            <textarea
              id="comment"
              name="comment"
              class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
              aria-describedby="comment-desc"
            />
            <small id="comment-desc" class="f6 black-60">
              Paste the content here. Can use this text to{" "}
              <a href="#" class="link underline black-80 hover-black">
                link to more info.
              </a>
            </small>
          </div>
        </form>
      </div>
    );
  }
}
