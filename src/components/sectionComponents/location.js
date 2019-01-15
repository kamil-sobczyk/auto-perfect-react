import React from 'react';
import Header from './header';

const Location = () => (
  <div className='container'>
    <Header title='Jak dojadę?' />
    <div className='row'>
      <div className='map col-md-6'>
        <iframe
          title='map'
          className='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.4002688028745!2d21.17836019919229!3d51.11952450169663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47186b5b5bccc14f%3A0x301b59cdaa61d06a!2zSmFzaWVuaWVjIEnFgsW8ZWNraSBHw7NybnkgMTUyLCAyNy0xMDAgSmFzaWVuaWVjIEnFgsW8ZWNraSBHw7Nybnk!5e0!3m2!1spl!2spl!4v1535736286069'
          frameBorder='0'
          allowFullScreen
        />
      </div>
      <div className='street col-md-5'>
        <iframe
          title='streetview'
          className='map'
          src='https://www.google.com/maps/embed?pb=!4v1535734643055!6m8!1m7!1sR_9LBpL6GHrPsF5i0hubAw!2m2!1d51.11952450169663!2d21.17836019919229!3f174.45603751117451!4f-0.49030174726226505!5f0.7820865974627469'
          frameBorder='0'
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

export default Location;
