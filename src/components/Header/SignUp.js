import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="display-name">
                  Display name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  name="displayName"
                  id="display-name"
                  onChange={this.props.handleInput}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="email-address">
                  Email address
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="email"
                  name="email"
                  id="email-address"
                  onChange={this.props.handleInput}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent w-100 measure"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.props.handleInput}
                />
              </div>
            </fieldset>
            <div className="mt3">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                type="submit"
                onClick={this.props.handleSignUp}
                value="Sign Up"
              />
            </div>
          </form>
        </main>
      </div>
    );
  }
}
