import React, { Component } from "react";

import sections from "./data/sections";

class NavButton extends Component {
  render() {
    return (
      <li className="nav-item" onClick={this.props.handleClick}>
        <a
          className={
            "nav-link " + (this.props.isActive === true ? "active" : "")
          }
        >
          {sections[this.props.index].name}
        </a>
      </li>
    );
  }
}

export default NavButton;
