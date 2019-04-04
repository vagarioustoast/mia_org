import React, { Component } from "react";
import axios from "axios";

export default class Category extends Component {
  render() {
    return (
      <div className="category-container">
        <section className="cf w-100 pa2-ns">
          <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
            <div className="aspect-ratio aspect-ratio--1x1">
              <img className="db bg-center cover aspect-ratio--object" />
            </div>
            <a href="#0" className="ph2 ph0-ns pb3 link db">
              <h3 className="f5 f4-ns mb0 black-90">Title of piece</h3>
              <h3 className="f6 f5 fw4 mt2 black-60">Author of piece</h3>
            </a>
          </article>
        </section>
      </div>
    );
  }
}
