import React, {lazy, Suspense} from 'react';
// import About from './sectionComponents/about';
// import Services from './sectionComponents/services';
// import Gallery from './sectionComponents/gallery';
// import Location from './sectionComponents/location';
// import FormContainer from './sectionComponents/formContainer';

const About = lazy(() => import('./sectionComponents/about'));
const Services = lazy(() => import('./sectionComponents/services'));
const Gallery = lazy(() => import('./sectionComponents/gallery'));
const Location = lazy(() => import('./sectionComponents/location'));
const FormContainer = lazy(() => import('./sectionComponents/formContainer'));

class SectionBuild {
  static build(data) {
    switch (data.name) {
      case 'O nas':
        return (
          <Suspense fallback={<h1>Ładowanie</h1>}>
            <About />
          </Suspense>
        );
      case 'Usługi':
        return (
          <Suspense fallback={<h1>Ładowanie</h1>}>
            <Services />
          </Suspense>
        );
      case 'Galeria':
        return (
          <Suspense fallback={<h1>Ładowanie</h1>}>
            <Gallery />
          </Suspense>
        );
      case 'Jak dojadę?':
        return (
          <Suspense fallback={<h1>Ładowanie</h1>}>
            <Location />
          </Suspense>
        );
      case 'Kontakt':
        return (
          <Suspense fallback={<h1>Ładowanie</h1>}>
            <FormContainer />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={<h1>Ładowanie</h1>}>
            <Services />
          </Suspense>
        );
    }
  }
}

export default SectionBuild;
