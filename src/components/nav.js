import React, { Component } from "react";

import menuButton from "../assets/generic/home.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  sections = ["O nas", "Usługi", "Galeria", "Jak dojadę?", "Kontakt"];

  handleClick = i => {
      this.sections.forEach((e, index) => {
        if (index === i) {
          this.setState({ activeIndex: i }, this.props.change(i));
        }
      });
      document
        .getElementsByClassName("navbar-collapse")[0]
        .classList.remove("show");
  };

  render() {
    const nav = this.sections.map((e, i) => {
      return (
        <li className="nav-item" key={i} onClick={this.handleClick.bind(this, i)}>
          <a
            className={
              "nav-link " + (this.state.activeIndex === i ? "active" : "")
            }
          >
            {this.sections[i]}
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
