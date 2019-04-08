import React, { Component } from "react";
import Admin from "./Admin";
import axios from "axios";

export default class AdminContainer extends Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const res = await fetch(`http://localhost:3001/users/all`);
    const users = await res.json();
    this.setState({
      users: users
    });
    console.log(users);
  }
  render() {
    const { users } = this.state;
    const userList = users.map(user => {
      return (
        <tr>
          <td className="pv3 pr3 bb b--black-20">{user.displayName}</td>
          <td className="pv3 pr3 bb b--black-20">{user.email}</td>
          <td className="pv3 pr3 bb b--black-20">
            {user.isAdmin ? "True" : "False"}
          </td>
          <td className="pv3 pr3 bb b--black-20">
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">
              Edit
            </a>
          </td>
          <td className="pv3 pr3 bb b--black-20">
            <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">
              Delete
            </a>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <Admin userList={userList} />
      </div>
    );
  }
}
