import React, { Component } from "react";
import Nav from "./nav";
import Banner from "./banner";
import Section from "./section";
import Footer from "./footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: "Usługi"
    };
  }

  handleChange = section => {
    this.setState({ section: section });
  }

  render() {
    return (
      <div className="container">
        <Banner />
        <Nav change={this.handleChange} />
        <Section chosenSection={this.state.section} />
        <Footer />
      </div>
    );
  }
}
