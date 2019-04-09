import React, { Component } from "react";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <h1>
              <a
                href="/"
                className="mt2 mb0 baskerville i fw1 f1 no-underline black-80"
              >
                Marxist Internet Archive
              </a>
            </h1>
            <a
              href="/signin"
              className="f7 f5-l link bg-animate black-80 dib ph2-l"
            >
              Sign in
            </a>
            <a
              href="/logout"
              className="f7 f5-l link bg-animate black-80 dib ph2-l"
              onClick={this.props.handleLogOut}
            >
              Log Out
            </a>
            <a
              href="/#about"
              className="f7 f5-l link bg-animate black-80 dib ph2-l"
            >
              About
            </a>
          </div>

          <nav className="bt bb tc mw8 center mt2">
            <a
              href="/articles/category/First International"
              className="f6 f5-l link bg-animate black-80 dib pa2 ph4-l"
            >
              First International
            </a>

            <a
              href="/articles/category/Western Marxism"
              className="f6 f5-l link bg-animate black-80 dib pa2 ph4-l"
            >
              Western Marxism
            </a>

            <a
              href="/articles/category/Trotskyists"
              className="f6 f5-l link bg-animate black-80 dib pa2 ph4-l"
            >
              Trotskyists
            </a>

            <a
              href="/articles/category/Left Communism"
              className="f6 f5-l link bg-animate black-80 dib pa2 ph4-l"
            >
              Left Communism
            </a>

            <a
              href="/articles/category/African Liberation"
              className="f6 f5-l link bg-animate black-80 dib pa2 ph4-l"
            >
              African Liberation
            </a>

            <a
              href="/articles/category/Black Liberation"
              className="f6 f5-l link bg-animate black-80 dib pa2 ph4-l"
            >
              Black Liberation
            </a>

            <a
              href="/articles/category/Feminists"
              className="f6 f5-l link bg-animate black-80 dib pa2 ph4-l"
            >
              Feminists
            </a>

            <a
              href="/articles/category/Philosophy"
              className="f6 f5-l link bg-animate black-80 dib pa2 ph4-l"
            >
              Philosophy
            </a>

            <a
              href="/articles/category/Ethics"
              className="f6 f5-l link bg-animate black-80 dib pa2 ph4-l"
            >
              Ethics
            </a>
          </nav>
        </header>
      </div>
    );
  }
}
