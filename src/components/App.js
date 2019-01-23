import React, { Component } from "react";
import Nav from "./nav";
import Banner from "./banner";
import SectionBuild from "./section";
import Footer from "./footer";

import sections from "../components/data/sections";

const Section = sections.map(item => SectionBuild.build(item));

class App extends Component {
  state = {
    section: 1
  };

  handleChange = section => {
    this.setState({ section });
  };

  render() {
    return (
      <div className="container">
        <Banner />
        <Nav change={this.handleChange} />
        <div className="section">{Section[this.state.section]}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
