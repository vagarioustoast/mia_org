import React, { Component } from "react";
import Admin from "./Admin";
import axios from "axios";

export default class AdminContainer extends Component {
  state = {
    users: [],
    authors: []
  };
  async componentDidMount() {
    const res = await fetch(`http://localhost:3001/users/all`);
    const resAuthors = await fetch(`http://localhost:3001/authors/all`);
    const users = await res.json();
    const authors = await resAuthors.json();
    this.setState({
      users: users,
      authors: authors
    });
    console.log(users);
    console.log(authors);
  }

  render() {
    const { users } = this.state;
    const { authors } = this.state;
    const userList = users.map(user => {
      return (
        <tr key={user._id}>
          <td className="pv3 pr3 bb b--black-20">{user.displayName}</td>
          <td className="pv3 pr3 bb b--black-20">{user.email}</td>
          <td className="pv3 pr3 bb b--black-20">
            {user.isAdmin ? "True" : "False"}
          </td>
          <td className="pv3 pr3 bb b--black-20">
            <a className="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">
              Edit
            </a>
          </td>
          <td className="pv3 pr3 bb b--black-20">
            <a className="f6 link dim ph3 pv2 mb2 dib white bg-red" href="#0">
              Delete
            </a>
          </td>
        </tr>
      );
    });
    // Render Author List
    const authorList = authors.map(author => {
      return (
        <option value={author._id} name="author" key={author._id}>
          {author.name}
        </option>
      );
    });

    return (
      <div>
        <Admin userList={userList} authorList={authorList} />
      </div>
    );
  }
}
