import React, { Component } from "react";
import "./links.scss";

export class Links extends Component<{}, {}> {
  render() {
    return (
      <div className="container-links">
        <h4>Documention</h4>
        <span>
          Various versions have evolved over the years, sometimes by accident
        </span>

        <div>
          <span>Set up</span>
          <span className="material-icons">keyboard_arrow_right</span>
        </div>

        <div>
          <span>Set up</span>
          <span className="material-icons">keyboard_arrow_right</span>
        </div>

        <div>
          <span>Set up</span>
          <span className="material-icons">keyboard_arrow_right</span>
        </div>

        <div>
          <span>Set up</span>
          <span className="material-icons">keyboard_arrow_right</span>
        </div>

        <div>
          <span>Set up</span>
          <span className="material-icons">keyboard_arrow_right</span>
        </div>

        <a href="#">View our courses</a>
      </div>
    );
  }
}
