import React, { Component } from "react";

const buttonsCollection = document.getElementsByClassName("more");
let moreButtons = [];

class Service extends Component {
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
    return (
      <figure
        className="service-img col-md-6"
        onClick={this.handleClickAndMouseEnter(this.props.index)}
        onMouseEnter={this.handleClickAndMouseEnter(this.props.index)}
        onMouseLeave={this.handleMouseLeave()}
      >
        <img src={this.props.img} alt={this.props.alt} />
        <div className="title">
          <div>
            <h2>{this.props.h2}</h2>
            <h4>{this.props.h4}</h4>
          </div>
        </div>
        <div className="more">więcej</div>
        <figcaption>
          <p> {this.props.p}</p>
        </figcaption>
      </figure>
    );
  }
}

export default Service;
