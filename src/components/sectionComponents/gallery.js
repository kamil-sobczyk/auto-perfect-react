import React, { Component } from "react";
import Header from "./header";

import images from "../data/galleryImages";

class Gallery extends Component {
  componentDidMount() {
    const thumbsList = document.getElementById("thumbsList");
    const allImages = document
      .getElementById("thumbsList")
      .getElementsByTagName("img");

    const TheLightBox = document.getElementById("lightBox");
    const ThelightBoxImage = document.getElementById("lightBoxImage");

    const numberOfImages = thumbsList.getElementsByTagName("li").length;

    let counter = 0;
    const nav = document.getElementsByTagName("nav");

    const hasClass = (e, className) => {
      if (e.classList) return e.classList.contains(className);
      else
        return !!e.className.match(
          new RegExp("(\\s|^)" + className + "(\\s|$)")
        );
    };

    const addClass = (e, className) => {
      if (e.classList) e.classList.add(className);
      else if (!hasClass(e, className)) e.className += " " + className;
    };

    const removeClass = (e, className) => {
      if (e.classList) e.classList.remove(className);
      else if (hasClass(e, className)) {
        const reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        e.className = e.className.replace(reg, " ");
      }
    };

    ThelightBoxImage.setAttribute("src", allImages[0].getAttribute("src"));

    const loadImageInLightBox = (URL, callback) => {
      const url = URL;
      ThelightBoxImage.setAttribute("src", url);
      if (typeof callback == "function") {
        callback();
      }
      nav[0].classList.add("hide");
    };

    const loadLightBox = () => {
      addClass(TheLightBox, "lightBox-active");
      addClass(ThelightBoxImage, "active-image");
    };

    const unloadLightBox = () => {
      removeClass(TheLightBox, "lightBox-active");
      removeClass(ThelightBoxImage, "active-image");
    };

    const prevImage = () => {
      if (counter <= 0) {
        counter = numberOfImages;
      }
      counter--;
      loadImageInLightBox(allImages[counter].getAttribute("src"));
    };

    const nextImage = () => {
      counter++;
      if (counter === numberOfImages) {
        counter = 0;
      }
      loadImageInLightBox(allImages[counter].getAttribute("src"));
    };

    document.getElementById("lightBox").addEventListener("click", e => {
      switch (e.target.id) {
        case "prevImg":
          prevImage();
          break;
        case "nextImg":
          nextImage();
          break;
        case "lightBoxImage":
          break;
        default:
          unloadLightBox();
          nav[0].classList.remove("hide");
      }
    });

    for (let i = 0; i < allImages.length; i++) {
      allImages[i].setAttribute("id", "thumb_" + i);
      allImages[i].addEventListener("click", e => {
        const theIndex = e.target.id.match(/\d+/)[0];
        counter = theIndex;
        loadImageInLightBox(e.target.getAttribute("src"), () => {
          loadLightBox(e.target.getAttribute("src"));
        });
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Header title="Galeria" />
        <div className="row-flex">
          <div id="thumbsList">
            <ul>
              {images.map((e, i) => (
                <li key={i}>
                  <img src={e.original} alt={e.title} />
                </li>
              ))}
            </ul>
          </div>
          <div id="lightBox">
            <img id="lightBoxImage" src="" alt="" />
            <div id="prevImg">
              <span />
            </div>
            <div id="nextImg">
              <span />
            </div>
            <div id="closeLightbox-button" />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
