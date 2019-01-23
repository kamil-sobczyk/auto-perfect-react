import React, { Component } from "react";

import menuButton from "../assets/generic/home.png";

import sections from './data/sections';

class Nav extends Component {
  state = {
    activeIndex: 1
  };

  handleClick = i => {
    sections.forEach((e, index) => {
      if (index === i) {
        this.setState({ activeIndex: i }, this.props.change(i));
      }
    });
    document
      .getElementsByClassName("navbar-collapse")[0]
      .classList.remove("show");
  };

  render() {
    const nav = sections.map((e, i) => {
      return (
        <li
          className="nav-item"
          key={i}
          onClick={this.handleClick.bind(this, i)}
        >
          <a
            className={
              "nav-link " + (this.state.activeIndex === i ? "active" : "")
            }
          >
            {sections[i].name}
          </a>
        </li>
      );
    });
    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={menuButton} alt="MENU" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">{nav}</ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
