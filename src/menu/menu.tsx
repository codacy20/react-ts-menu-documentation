import React, { Component } from "react";
import { Tiles } from "../tiles/tiles";
import { Links } from "../links/links";
import "./menu.scss";

export class Menu extends Component<{}, {}> {
  render() {
    return (
      <div className="container-menu">
        <Tiles />
        <Links />
      </div>
    );
  }
}
