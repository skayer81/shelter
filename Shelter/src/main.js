import './style/style.scss';


class App {

  PAGES = {
      main: document.getElementById('mainPage'),
      pets: document.getElementById('petsPage')
    };

 buttonsArray = [
    {buttonElement:  document.getElementById('aboutButton'),
     pageKey: 'main',
     href: ''
    },
        {buttonElement:  document.getElementById('petsButton'),
     page: 'pets',
      href: ''
    },
        {buttonElement:  document.getElementById('helpButton'),
     page: 'main',
      href: 'help'
    },
        {buttonElement:  document.getElementById('contactsButton'),
     page: null,
      href: 'footer'
    },

];

  header = document.getElementById('header')

  currentPage = 'main';

  constructor(){
    this.addOnClick();
  }

  addOnClick = () => {
    this.buttonsArray.forEach((button) => {
        button.buttonElement.addEventListener('click',() => {
            this.buttonClick(button.page,button.href)
        })
    })
  }

  buttonClick = (page, href) => {
    this.navigateTo(page, href)
    this.setHeaderStyles(page);
    
  }

  navigateTo = (page, href) => {
     if (!page){
       page = this.currentPage;
     }
     if (page != this.currentPage) {
       this.PAGES[this.currentPage].setAttribute('hidden', '');
       this.currentPage = page;
       this.PAGES[this.currentPage].removeAttribute('hidden');
    }
      if (href) document.location =`#${href}`;
  }

  setHeaderStyles = (page) => {
    this.header.classList.toggle('home', page = 'main');
    this.header.classList.toggle('pets', page = 'pets')
  }
}

new App()




