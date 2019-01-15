import React from 'react';
import About from './sectionComponents/about';
import Services from './sectionComponents/services';
import Gallery from './sectionComponents/gallery';
import Location from './sectionComponents/location';
import FormContainer from './sectionComponents/formContainer';

const Section = props => {
  if (props.chosenSection === 'O nas') {
    return (
      <div className='section'>
        <About />
      </div>
    );
  }
  if (props.chosenSection === 'Usługi') {
    return (
      <div className='section'>
        <Services />
      </div>
    );
  }
  if (props.chosenSection === 'Galeria') {
    return (
      <div className='section'>
        <Gallery />
      </div>
    );
  }
  if (props.chosenSection === 'Jak dojadę?') {
    return (
      <div className='section'>
        <Location />
      </div>
    );
  }
  if (props.chosenSection === 'Kontakt') {
    return (
      <div className='section'>
        <FormContainer />
      </div>
    );
  }
};

export default Section;
