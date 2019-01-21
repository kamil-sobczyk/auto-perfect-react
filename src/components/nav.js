import React, { Component } from 'react';

import menuButton from '../assets/generic/home.png';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [
        { title: 'O nas', active: '' },
        { title: 'Usługi', active: 'active' },
        { title: 'Galeria', active: '' },
        { title: 'Jak dojadę?', active: '' },
        { title: 'Kontakt', active: '' }
      ]
    };
  }

  handleClick(i) {
    const nav = this.state.nav;
    nav.forEach((e, index) => {
      if (index === i) {
        e.active = 'active';
      } else {
        e.active = '';
      }
    });
    document
      .getElementsByClassName('navbar-collapse')[0]
      .classList.remove('show');

    this.props.change(nav[i].title);
    this.setState({ nav: nav });
  };

  render() {
    const nav = this.state.nav.map((e, i) => {
      if (e.active === 'active')
        return (
          <li className='nav-item' key={i} onClick={() => this.handleClick(i)}>
            <a className={'nav-link active'} href='#'>
              {e.title}
            </a>
          </li>
        );
      else
        return (
          <li className='nav-item' key={i} onClick={() => this.handleClick(i)}>
            <a className='nav-link' href='#'>
              {e.title}
            </a>
          </li>
        );
    });
    return (
      <header>
        <nav className='navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <img src={menuButton} alt='MENU' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>{nav}</ul>
          </div>
        </nav>
      </header>
    );
  }
}
