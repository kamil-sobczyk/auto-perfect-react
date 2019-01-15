import React from 'react';
import Header from './header';

import about from '../../assets/gallery/g1-min-min.jpg';

const About = () => (
  <div className='container'>
    <Header title='O nas' />
    <div>
      <div className='row'>
        <div className='img col-md-6'>
          <img src={about} alt='O nas' className='img-fluid' />
        </div>
        <div className='col-md-4 row-flex'>
          <p>
            Zakład istnieje od 2007 roku. Zapewniamy szeroką gamę usług, oraz
            konkurencyjne ceny. <br />
            Godziny otwarcia: <br /> Poniedziałek - Piątek: 8-17 <br />
            Sobota: 8-14 <br />
            tel: 696-132-837
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
