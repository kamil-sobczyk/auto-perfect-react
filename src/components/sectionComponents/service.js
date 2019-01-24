import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
      <figure
        className="service-img col-md-6"
        onClick={this.props.handleClickAndMouseEnter}
        onMouseEnter={this.props.handleClickAndMouseEnter}
        onMouseLeave={this.props.handleMouseLeave}
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
