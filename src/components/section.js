import React from "react";
import About from "./sectionComponents/about";
import Services from "./sectionComponents/services";
import Gallery from "./sectionComponents/gallery";
import Location from "./sectionComponents/location";
import FormContainer from "./sectionComponents/formContainer";


class SectionBuild {
  static build (data) {
    switch (data.source) {
      case 'O nas':
      return <About/>;
      case 'Usługi':
      return <Services/>;
      case 'Galeria':
      return <Gallery/>;
      case 'Jak dojadę?':
      return <Location/>
      case 'Kontakt':
      return <FormContainer/>
      default:
      return <Services/>;
    }
  }
}


  // if (props.chosenSection === "O nas") {
  //   return (
  //     <div className="section">
  //       <About />
  //     </div>
  //   );
  // }
  // if (props.chosenSection === "Usługi") {
  //   return (
  //     <div className="section">
  //       <Services />
  //     </div>
  //   );
  // }
  // if (props.chosenSection === "Galeria") {
  //   return (
  //     <div className="section">
  //       <Gallery />
  //     </div>
  //   );
  // }
  // if (props.chosenSection === "Jak dojadę?") {
  //   return (
  //     <div className="section">
  //       <Location />
  //     </div>
  //   );
  // }
  // if (props.chosenSection === "Kontakt") {
  //   return (
  //     <div className="section">
  //       <FormContainer />
  //     </div>
//     );
//   }
// };

export default SectionBuild;
