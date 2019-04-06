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
    return (
      <div>
        <section className="mw7 center">
          <h2 className="athelas ph3 ph0-l">News</h2>
          <Category />
        </section>
      </div>
    );
  }
}
