import React, { Component } from "react";
import "./tiles.scss";
import { Tile } from "../model/tile.model";

export class Tiles extends Component<{}, {}> {
  data: Tile[] = [
    {
      icon: "credit_card",
      desc: "Payment page that lets you collect payments quickly",
      title: "Integrated checkout"
    },
    {
      icon: "menu_book",
      desc: "Find a guide to integrate payment and other APIs.",
      title: "Libraries"
    },
    {
      icon: "extension",
      desc:
        "Create and run your online business without writing code yourself.",
      title: "Plugins"
    },
    {
      icon: "code",
      desc: "Samples that help you learn the common integration patterns.",
      title: "Code samples"
    }
  ];

  render() {
    return (
      <div className="container-tiles">
        <h4>Get Started</h4>
        <div className="divider"></div>

        {this.data.map((item: Tile, index: number) => (
          <div className="tile" key={index}>
            <div className="header">
              <span className="material-icons">{item.icon}</span>
              <h4>{item.title}</h4>
            </div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    );
  }
}
