import React, { Component } from "react";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>

        {/* Article Submission */}
        <h2>Add Work</h2>
        <form className="center pa4 black-80">
          <div className="measure">
            <label htmlFor="name" className="f6 b db mb2">
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
            <label htmlFor="name" className="f6 b db mb2">
              Author <span className="normal black-60">(Required)</span>
            </label>
            <select>{this.props.authorList}</select>
            <small id="name-desc" className="f6 black-60 db mb2">
              e.g, "Walter Benjamin"
            </small>
          </div>
          <div className="measure">
            <label htmlFor="name" className="f6 b db mb2">
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
            <label htmlFor="comment" className="f6 b db mb2">
              Content <span className="normal black-60">(Required)</span>
            </label>
            <textarea
              id="comment"
              name="comment"
              className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
              aria-describedby="comment-desc"
            />
          </div>
          <a className="f6 link ba bw2 ph3 pv2 mb2 dib black" href="#0">
            Submit
          </a>
        </form>
        {/* Displays User List */}
        <h2>Users</h2>
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
    );
  }
}
