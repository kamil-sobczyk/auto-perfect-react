import React, { Component } from "react";
import Header from "./header";

import servicesList from "../data/servicesList";
import Service from "./service";

const buttonsCollection = document.getElementsByClassName("more");
let moreButtons = [];

class Services extends Component {
  render() {
    const services = servicesList.map((e, i) => {
      return (
        <Service
          index={i}
          key={i}
          img={e.img}
          alt={e.altImg}
          h2={e.h2}
          h4={e.h4}
          p={e.p}
        />
      );
    });
    return (
      <div className="container">
        <Header title="Usługi" />
        <div className="row row-flex">
          {services}
        </div>
      </div>
    );
  }
}

export default Services;
