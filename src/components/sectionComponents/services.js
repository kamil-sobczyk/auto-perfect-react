import React, { Component } from 'react';
import Header from './header';

const services = [
  {
    img: require('../../assets/services/service.jpg'),
    altImg: 'Serwis bieżący',
    h2: 'bieżący',
    h4: 'serwis',
    p:
      'Wymiana klocków, tarcz hamulcowych, rozrządu, układów wydechowych, elementów zawieszenia, oleju i innych płynów. Kompleksowy serwis każdego auta, konserwacje podwozia oraz przygotowanie do przegladów rejestracyjnych.'
  },
  {
    img: require('../../assets/services/carrier.jpg'),
    altImg: 'Autolaweta',
    h2: 'holowanie',
    h4: 'autolaweta',
    p:
      'Większa awaria, wypadek na drodze? Holujemy samochody osobowe i dostawcze, na terenie całego kraju. Oferujemy również transport quadów, motocykli, maszyn i innych ładunków do 1400kg.'
  },
  {
    img: require('../../assets/services/tires.jpg'),
    altImg: 'Wymiana opon',
    h2: 'wulkanizacja',
    h4: 'wymiana opon',
    p:
      'Koniec sezonu? Oferujemy wymianę opon i kół, wraz z wyważeniem, a także spawanie felg zarówno stalowych jak i aluminiowych. Prowadzimy również sprzedaż opon - nowych i używanych.'
  },
  {
    img: require('../../assets/services/rim.jpg'),
    altImg: 'Spawanie',
    h2: 'aluminium',
    h4: 'spawanie felg',
    p:
      'Oferujemy spawanie felg aluminiowych, łap od silników, skrzyń biegów, misek olejowych , układów wydechowych, tłumików i innych podzepołów.'
  },
  {
    img: require('../../assets/services/general.jpg'),
    altImg: 'Remonty generalne',
    h2: 'generalne',
    h4: 'remonty',
    p:
      'Przeprowadzamy remonty silników, wymiany sprzęgieł, oraz inne naprawy. Diagnostyka, kompuerowa - jesteśmy w stanie szybko zająć się problemem.'
  },
  {
    img: require('../../assets/services/comp.jpg'),
    altImg: 'Diagnostyka komputerowa',
    h2: 'komputerowa',
    h4: 'diagnostyka',
    p:
      'Alfa Romeo, Audi, Citroen, Dacia, Fiat, Ford, Hyundai, Iveco, Lancia, Mazda, Mercedes, Nissan, Opel, Peugeot, Renault, Seat, Seat, Skoda, Smart, Toyota, Volkswagen, Volvo.'
  },
  {
    img: require('../../assets/services/sell.jpg'),
    altImg: 'Skup aut',
    h2: 'sprzedaż',
    h4: 'skup aut',
    p:
      'Prowadzimy skup i sprzedaż samochodów uzywanych - całych, uszkodzonych, powypadkowych, do remontu. Oferujemy konkurencyjne ceny. Chcesz wiedzieć więcej? Zadzwoń, lub przyjedź na wycenę auta.'
  }
];
const buttonsCollection = document.getElementsByClassName('more');
let moreButtons = [];

export default class Services extends Component {

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
