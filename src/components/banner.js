import React from 'react';

import logo from '../assets/generic/logo.png';

const Banner = () => (
  <div className='container'>
    <div className='row row-flex banner-box'>
      <div className='banner col-md-4'>
        <img className='img-fluid' src={logo} alt='Auto Perfect Logo' />
      </div>
      <div className='banner col-md-4'>
        <span>
          Auto Perfect <br />
          Sławomir Kurek <br />
          Jasieniec Iłżecki Górny 152 <br />
          27-100 Iłża <br />
          696-132-837
        </span>
      </div>
    </div>
  </div>
);

export default Banner;
