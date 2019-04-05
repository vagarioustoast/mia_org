import React, { Component } from "react";
import "./FrontPage.css";

export default class FrontPage extends Component {
  render() {
    return (
      <div className="page-container">
        <div>
          <div className="mw9 center ph3-ns">
            <div className="cf ph2-ns">
              {/* Left Side */}
              <div className="fl w-100 w-60-ns pa2">
                {/* Article */}
                <article className="center mw5 mw6-ns hidden ba mv4">
                  <h1 className="f4 bg-near-black white mv0 pv2 ph3">
                    Title of card
                  </h1>
                  <div className="pa3 bt">
                    <p className="f6 f5-ns lh-copy measure mv0">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>
                </article>
                {/* Article */}
                <article className="center mw5 mw6-ns hidden ba mv4">
                  <h1 className="f4 bg-near-grey black mv0 pv2 ph3">
                    Title of card
                  </h1>
                  <div className="pa3 bt">
                    <p className="f6 f5-ns lh-copy measure mv0">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>
                </article>
              </div>
              {/* Right Side */}
              <div className="fl w-100 w-40-ns pa2">
                <div className="outline bg-white pv4">
                  {/* Article */}
                  <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <div className="tc">
                      <img
                        src="http://tachyons.io/img/avatar_1.jpg"
                        className="br-100 h3 w3 dib"
                        title="Photo of a kitty staring at you"
                      />
                      <h1 className="f4">Mimi Whitehouse</h1>
                      <hr className="mw3 bb bw1 b--black-10" />
                    </div>
                    <p className="lh-copy measure center f6 black-70">
                      Quite affectionate and outgoing. She loves to get chin
                      scratches and will roll around on the floor waiting for
                      you give her more of them.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="about">
          <h1>About Section</h1>
        </section>
      </div>
    );
  }
}
