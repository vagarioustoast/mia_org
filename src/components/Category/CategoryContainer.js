import React, { Component } from "react";
import Category from "./Category";

export default class CategoryContainer extends Component {
  render() {
    return (
      <div>
        <section className="mw7 center">
          <h2 class="athelas ph3 ph0-l">News</h2>
          <Category />
        </section>
      </div>
    );
  }
}
