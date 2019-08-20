// https://codepen.io/edmundojr/pen/eNPJVW
// https://github.com/metafizzy/flickity/blob/master/css/flickity.css
// https://codepen.io/desandro/pen/wjeBpp

const carouselContainer = document.getElementsByClassName('carousel__container')[0];
const carousel = document.getElementsByClassName('carousel')[0];

const handleCardClick = (index) => {
    const prevSelectedCard = document.getElementsByClassName('carousel__cell--selected')[0];
    prevSelectedCard.classList.remove('carousel__cell--selected');
    prevSelectedCard.style.setProperty('transform', 'none');

    const selectedCard = document.getElementsByClassName('carousel__cell')[index];
    selectedCard.classList.add('carousel__cell--selected');
    selectedCard.style.transform = 'scale(1.1)'; // Did this because I didn't think css transform was picked up by JS but I'm not sure. 
    if (prevSelectedCard != selectedCard) {
      const carouselLeftToCardLeft = Math.abs(carousel.getBoundingClientRect().left  - selectedCard.getBoundingClientRect().left)
      console.log(carouselLeftToCardLeft, 'center', getCenter(selectedCard))
      const carouselTransformation = getCenter(selectedCard) + 200; //180 but should be 195 cause of transformation?  
      slideCarousel(carouselTransformation);
    }
  }

 
const slideCarousel = (newCenter) => {
    const carouselTransformPos = getCenter(carouselContainer) - newCenter;
    carousel.style.transform = `translateX(${carouselTransformPos}px)`;
}

const setCardOnClicks =  () => {
    const cards = document.getElementsByClassName('carousel__cell');
    Array.prototype.forEach.call(cards, (card, index) => {
        card.addEventListener('click', () => {
            handleCardClick(index);
            handleButtonClick(index);
        });
    })
}

const handleButtonClick = (index) => {
    const prevSelectedButton = document.getElementsByClassName('carousel__button--selected')[0];
    prevSelectedButton.className = prevSelectedButton.className.replace('carousel__button--selected', '');

    const selectedButton = document.getElementsByClassName('carousel__button')[index];
    selectedButton.className += ' carousel__button--selected';
}


const setButtonOnClicks =  () => {
    const buttons = document.getElementsByClassName('carousel__button');
    Array.prototype.forEach.call(buttons, (button, index) => { 
        button.addEventListener('click', () => {
            handleCardClick(index)
            handleButtonClick(index)
        });
    })
}

const getCenter = (elem) => {
    /** Return center of element relative to the viewport */
    const style = elem.currentStyle || window.getComputedStyle(elem);
    console.log(elem.getBoundingClientRect().width/2, parseInt(style.getPropertyValue('margin-left')));
    const center = elem.getBoundingClientRect().width/2 + parseInt(style.getPropertyValue('margin-left'));
    return center;
}


const setInitialCarouselPos = () => {
    const selectedCard = document.getElementsByClassName('carousel__cell--selected')[0];
    const selectedCellCenter = getCenter(selectedCard)+200;
    slideCarousel(selectedCellCenter)
  }

const initialize = () => {
    setInitialCarouselPos() 
    setCardOnClicks()
  }
   
  initialize() 
   
