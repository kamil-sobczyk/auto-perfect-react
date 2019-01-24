import React, { Component } from "react";
import Header from "./header";

import servicesList from "../data/servicesList";
import Service from "./service";

const buttonsCollection = document.getElementsByClassName("more");
let moreButtons = [];

class Services extends Component {
  handleClickAndMouseEnter(figure) {
    for (let i = 0; i < buttonsCollection.length; i++) {
      moreButtons.push(buttonsCollection[i]);
    }

    for (let i = 0; i < buttonsCollection.length; i++) {
      if (i === figure) {
        moreButtons[i].classList.add("hide");
      } else {
        if (moreButtons[i].classList.contains("hide")) {
          moreButtons[i].classList.remove("hide");
        }
      }
    }
  }

  handleMouseLeave() {
    for (let i = 0; i < buttonsCollection.length; i++) {
      if (moreButtons[i].classList.contains("hide")) {
        moreButtons[i].classList.remove("hide");
      }
    }
  }

  render() {
    const services = servicesList.map((e, i) => {
      return (
        <Service
          handleClickAndMouseEnter={this.handleClickAndMouseEnter(i)}
          handleMouseLeave={this.handleMouseLeave()}
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
        <div className="row row-flex">{services}</div>
      </div>
    );
  }
}

export default Services;
