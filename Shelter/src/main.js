import './style/style.scss';
import { Animations } from './animations.js';


class App {

  PAGES = {
      main: document.getElementById('mainPage'),
      pets: document.getElementById('petsPage')
    };

 buttonsArray = [
    {buttonElement:  document.getElementById('aboutButton'),
     page: 'main',
     href: 'header'
    },
        {buttonElement:  document.getElementById('petsButton'),
     page: 'pets',
      href: 'header'
    },
        {buttonElement:  document.getElementById('helpButton'),
     page: 'main',
      href: 'help'
    },
        {buttonElement:  document.getElementById('contactsButton'),
     page: null,
      href: 'footer'
    },
      {buttonElement:  document.getElementById('GetToKnowButton'),
     page: 'pets',
      href: 'header'
    },
        {buttonElement:  document.getElementById('logoButton'),
      page: 'main',
      href: ''
    },


];

  header = document.getElementById('header')

  currentPage = 'main';

  constructor(){
    this.addOnClick();
    this.animations = new Animations();
  }

  addOnClick = () => {
    this.buttonsArray.forEach((button) => {
        button.buttonElement.addEventListener('click',() => {
            this.buttonClick(button.page,button.href)
        })
    })
  }

  buttonClick = async (pageKey, href) => {
        if (!pageKey) {
      pageKey = this.currentPage;
    }
    
    if (pageKey !== this.currentPage) {
      const oldPage = this.PAGES[this.currentPage];
      const newPage = this.PAGES[pageKey];
      
      await this.animations.removePageAnimations(oldPage);
      
      oldPage.setAttribute('hidden', '');
      newPage.removeAttribute('hidden');
      this.setHeaderStyles(pageKey);

      await this.animations.showPageAnimations(newPage);
      
      this.currentPage = pageKey;
    }
    
    if (href) document.location = `#${href}`;
  }

  setHeaderStyles = (page) => {
    this.header.classList.toggle('home', page === 'main');
    this.header.classList.toggle('pets', page === 'pets')
  }
}

new App()




