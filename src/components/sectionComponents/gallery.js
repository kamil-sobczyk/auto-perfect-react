import React, { Component } from 'react';
import Header from './header';

const images = [
  {
    original: require('../../assets/gallery/g1-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g2-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g3-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g4-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g5-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g6-min-min.jpg'),
    title: 'picture'
  },

  {
    original: require('../../assets/gallery/g10-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g11-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g12-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g13-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g14-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g15-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g16-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g17-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g19-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g21-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g22-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g25-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g26-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g27-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g28-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g29-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g30-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g31-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g34-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g36-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g39-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g40-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g7-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g8-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g20-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g23-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g24-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g32-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g33-min-min.jpg'),
    title: 'picture'
  },
  {
    original: require('../../assets/gallery/g35-min-min.jpg'),
    title: 'picture'
  }
];

export default class Gallery extends Component {
  componentDidMount() {
    const thumbsList = document.getElementById('thumbsList');
    const allLIs = thumbsList.getElementsByTagName('li');
    const allImages = thumbsList.getElementsByTagName('img');

    const TheLightBox = document.getElementById('lightBox');
    const ThelightBoxImage = document.getElementById('lightBoxImage');

    const prevImg = document.getElementById('prevImg');
    const nextImg = document.getElementById('nextImg');

    const numberOfImages = allLIs.length;
    const currentImage = counter;

    let counter = 0;
    const nav = document.getElementsByTagName('nav');

    const hasClass = (e, className) => {
      if (e.classList) return e.classList.contains(className);
      else
        return !!e.className.match(
          new RegExp('(\\s|^)' + className + '(\\s|$)')
        );
    };

    const addClass = (e, className) => {
      if (e.classList) e.classList.add(className);
      else if (!hasClass(e, className)) e.className += ' ' + className;
    };

    const removeClass = (e, className) => {
      if (e.classList) e.classList.remove(className);
      else if (hasClass(e, className)) {
        const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        e.className = e.className.replace(reg, ' ');
      }
    };

    ThelightBoxImage.setAttribute('src', allImages[0].getAttribute('src'));

    const loadImageInLightBox = (URL, callback) => {
      const url = URL;
      ThelightBoxImage.setAttribute('src', url);
      if (typeof callback == 'function') {
        callback();
      }
      nav[0].classList.add('hide');
    };

    const loadLightBox = () => {
      addClass(TheLightBox, 'lightBox-active');
      addClass(ThelightBoxImage, 'active-image');
    };

    const unloadLightBox = () => {
      removeClass(TheLightBox, 'lightBox-active');
      removeClass(ThelightBoxImage, 'active-image');
    };

    const prevImage = () => {
      if (counter <= 0) {
        counter = numberOfImages;
      }
      counter--;
      loadImageInLightBox(allImages[counter].getAttribute('src'));
    };

    const nextImage = () => {
      counter++;
      if (counter == numberOfImages) {
        counter = 0;
      }
      loadImageInLightBox(allImages[counter].getAttribute('src'));
    };

    document.getElementById('lightBox').addEventListener('click', e => {
      switch (e.target.id) {
        case 'prevImg':
          prevImage();
          break;
        case 'nextImg':
          nextImage();
          break;
        case 'lightBoxImage':
          break;
        default:
          unloadLightBox();
          nav[0].classList.remove('hide');
      }
    });

    for (let i = 0; i < allImages.length; i++) {
      allImages[i].setAttribute('id', 'thumb_' + i);
      allImages[i].addEventListener('click', e => {
        const theIndex = e.target.id.match(/\d+/)[0];
        counter = theIndex;
        loadImageInLightBox(e.target.getAttribute('src'), () => {
          loadLightBox(e.target.getAttribute('src'));
        });
      });
    }
  };

  render() {
    return (
      <div className='container'>
        <Header title='Galeria' />
        <div className='row-flex'>
          <div id='thumbsList'>
            <ul>
              {images.map((e, i) => (
                <li key={i}>
                  <img src={e.original} alt={e.title} />
                </li>
              ))}
            </ul>
          </div>
          <div id='lightBox'>
            <img id='lightBoxImage' src='' alt='' />
            <div id='prevImg'>
              <span />
            </div>
            <div id='nextImg'>
              <span />
            </div>
            <div id='closeLightbox-button' />
          </div>
        </div>
      </div>
    );
  }
}
