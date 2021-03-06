import React, { Component } from "react";
import News from "./News";
import "./FrontPage.css";

export default class FrontPage extends Component {
  render() {
    return (
      <div className="page-container">
        <div>
          <div>
            <div className="mw9 center ph3-ns">
              <div className="cf ph2-ns">
                <div className="fl w-100 w-60-ns pa2 center">
                  <div className="fl w-100 w-100-ns center">
                    {/* Article */}
                    <h1 className="i">Most Popular</h1>
                    {this.props.articlesList}
                  </div>
                </div>
                <div className="fl w-100 w-40-ns center pa2">
                  <article
                    id="marx-image"
                    className="mw6 center bg-black br3 pa3 pa4-ns mv3 ba b--black-10"
                  >
                    <div className="tc">
                      <img
                        src="https://ih0.redbubble.net/image.450732259.6063/flat,550x550,075,f.jpg"
                        className="br-100 h5 w5 dib ba b--black-05 pa2"
                        alt=""
                      />
                      <h1 className="f3 white i mb2">Welcome!</h1>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* News Section */}

        <section id="news" className="cf pa2-m">
          <h1 className="black-90 baskerville f1 i w-80 tc center pa3 ba white bg-black">
            Around the World
          </h1>
          <News />
        </section>
        <section id="about">
          <div
            className="vh-100 dt w-100 tc bg-dark-gray white cover"
            style={{
              background: `url(https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_1280.jpg), no-repeat, center`
            }}
          >
            <div className="dtc v-mid">
              <h1 className="f1 f-headline-l fw5 i white">About the Archive</h1>
              <blockquote className="pa3 mh0 measure bg-black-40 f4 lh-copy center">
                <h3 className="f5 fw1 lh-title">
                  We have built these archives from the ground up through the
                  hard work of volunteers around the world. All our volunteers
                  work in more or less complete autonomy, held together by our
                  charter, bylaws, and cooperative work with one another.
                  Volunteers come into the project to do work on what they like
                  — there is no top down or centralized planning structure — so
                  if we don't have something in these archives, it is because no
                  one has volunteered to contribute it! If there is a certain
                  author or work you're looking for that we do not have,
                  volunteer to put that information that is important to you on
                  the internet so it can be shared with others! The volunteers
                  who have built the Marxists Internet Archive are from all over
                  the world — from Indonesia to Greece, from the US to the
                  United Arab Emirates.
                </h3>{" "}
                <h3 className="f5 fw1 lh-title">
                  The political practices of MIA volunteers are as diverse as
                  our different backgrounds, age, and race. Most of us are not
                  professors, teachers, students or otherwise involved with
                  academia. We are all involved with activities other than
                  building this archive, from our day-jobs (and we hold a
                  diverse array of them!) to being with our families and
                  friends. The MIA has been built simply by workers who give a
                  few minutes of labour at the end of the day — Keep this in
                  mind when you write to us with a suggestion — the best way to
                  build this archive is to help in making it happen!
                </h3>
                <cite className="f6 ttu tracked fs-normal">
                  <a
                    className="white"
                    href="https://www.marxists.org/admin/volunteers/volunteers.htm"
                  >
                    Read more
                  </a>
                </cite>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
