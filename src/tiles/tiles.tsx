import React, { Component } from "react";
import "./tiles.scss";

export class Tiles extends Component<{}, {}> {
  render() {
    return (
      <div className="container-tiles">
        <h4>Get Started</h4>
        <div className="divider"></div>
        <div className="tile">
          <div className="header">
            <span className="material-icons">credit_card</span>
            <h4>title</h4>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>

        <div className="tile">
          <div className="header">
            <span className="material-icons">menu_book</span>
            <h4>title</h4>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>

        <div className="tile">
          <div className="header">
            <span className="material-icons">extension</span>
            <h4>title</h4>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>

        <div className="tile">
          <div className="header">
            <span className="material-icons">code</span>
            <h4>title</h4>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
      </div>
    );
  }
}
