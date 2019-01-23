import React from "react";
import About from "./sectionComponents/about";
import Services from "./sectionComponents/services";
import Gallery from "./sectionComponents/gallery";
import Location from "./sectionComponents/location";
import FormContainer from "./sectionComponents/formContainer";

class SectionBuild {
  static build(data) {
    switch (data.name) {
      case "O nas":
        return <About />;
      case "Usługi":
        return <Services />;
      case "Galeria":
        return <Gallery />;
      case "Jak dojadę?":
        return <Location />;
      case "Kontakt":
        return <FormContainer />;
      default:
        return <Services />;
    }
  }
}

export default SectionBuild;
