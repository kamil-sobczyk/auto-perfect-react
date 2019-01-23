import React, { Component } from 'react';
import Header from './header';

import services from '../data/servicesList';

const buttonsCollection = document.getElementsByClassName('more');
let moreButtons = [];

class Services extends Component {

  handleClickAndMouseEnter(figure) {
    for (let i = 0; i < buttonsCollection.length; i++) {
      moreButtons.push(buttonsCollection[i]);
    }

    for (let i = 0; i < buttonsCollection.length; i++) {
      if (i === figure) {
        moreButtons[i].classList.add('hide');
      } else {
        if (moreButtons[i].classList.contains('hide')) {
          moreButtons[i].classList.remove('hide');
        }
      }
    }
  };

  handleMouseLeave() {
    for (let i = 0; i < buttonsCollection.length; i++) {
      if (moreButtons[i].classList.contains('hide')) {
        moreButtons[i].classList.remove('hide');
      }
    }
  };

  render() {
    return (
      <div className='container'>
        <Header title='Usługi' />
        <div className='row row-flex'>
          {services.map((e, i) => (
            <figure
              className='service-img col-md-6'
              key={i}
              onClick={this.handleClickAndMouseEnter(i)}
              onMouseEnter={this.handleClickAndMouseEnter(i)}
              onMouseLeave={this.handleMouseLeave()}
            >
              <img src={e.img} alt={e.altImg} />
              <div className='title'>
                <div>
                  <h2>{e.h2}</h2>
                  <h4>{e.h4}</h4>
                </div>
              </div>
              <div className='more'>więcej</div>
              <figcaption>
                <p> {e.p}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
