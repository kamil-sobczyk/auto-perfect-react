import React, { Component } from 'react';
import Nav from './nav';
import Banner from './banner';
import Section from './section';
import Footer from './footer';

export default class App extends Component {
  state = {
    section: 'Usługi'
  };

  handlechange(section) {
    this.setState({ section: section });
  };

  render() {
    return (
      <div className='container'>
        <Banner />
        <Nav change={section => this.handlechange(section)} />
        <Section chosenSection={this.state.section} />
        <Footer />
      </div>
    );
  }
}
