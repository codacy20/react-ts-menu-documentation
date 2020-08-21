import React, { Component } from "react";
import "./links.scss";

export class Links extends Component<{}, {}> {
  render() {
    return (
      <div className="container-links">
        <div className="header">
          <h4>Documention</h4>
          <div id="header-detail">
            <span>
              Various versions have evolved over the years, sometimes by
              accident
            </span>
          </div>
        </div>

        <div className="wrapper-links">
          <div className="links">
            <span>Set up</span>
            <span className="material-icons">keyboard_arrow_right</span>
          </div>

          <div className="links">
            <span>Set up</span>
            <span className="material-icons">keyboard_arrow_right</span>
          </div>

          <div className="links">
            <span>Set up</span>
            <span className="material-icons">keyboard_arrow_right</span>
          </div>

          <div className="links">
            <span>Set up</span>
            <span className="material-icons">keyboard_arrow_right</span>
          </div>

          <div className="links">
            <span>Set up</span>
            <span className="material-icons">keyboard_arrow_right</span>
          </div>
        </div>
        <div id="view-course">
          <a href="#">View our courses</a>
        </div>
      </div>
    );
  }
}
