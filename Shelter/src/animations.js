export class Animations {

         pageShow = [
        { transform: 'rotateY(-90deg)' },
        { transform: 'rotateY(0deg)' }
      ];

            pageHidden = [
        { transform: 'rotateY(0deg)' },
        { transform: 'rotateY(-90deg)' }
      ];

            animationTiming = {
        duration: 500,
        iterations: 1,
        easing: 'linear',
        direction: 'alternate',
        fill: 'forwards',
      };

  showPageAnimations(newPage) {
    return new Promise((resolve) => {  

      let pageAnimation = newPage.animate(this.pageShow, this.animationTiming);
      
      pageAnimation.addEventListener("finish", () => {
        resolve(); 
      });
    });
  }

  removePageAnimations(oldPage) {
    return new Promise((resolve) => {
      
      let pageAnimation = oldPage.animate(this.pageHidden, this.animationTiming);
      
      pageAnimation.addEventListener("finish", () => {
        resolve();
      });
    });
  }
}