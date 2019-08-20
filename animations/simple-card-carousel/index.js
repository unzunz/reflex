// TODO: Refactor me. 
const setCardOnClicks =  () => {
    const cards = document.getElementsByClassName('carousel__cell');
    Array.prototype.forEach.call(cards, (card, index) => {
        card.addEventListener('click', () => {
            handleCardClick(index);
            handleButtonClick(index);
        });
    })
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

const handleButtonClick = (index) => {
    const prevSelectedButton = document.getElementsByClassName('carousel__button--selected')[0];
    prevSelectedButton.className = prevSelectedButton.className.replace('carousel__button--selected', '');

    const selectedButton = document.getElementsByClassName('carousel__button')[index];
    selectedButton.className += ' carousel__button--selected';
}

const handleCardClick = (index) => {
    const prevSelectedCard = document.getElementsByClassName('carousel__cell--selected')[0];
    prevSelectedCard.classList.remove('carousel__cell--selected');

    const selectedCard = document.getElementsByClassName('carousel__cell')[index];
    selectedCard.classList.add('carousel__cell--selected');
    centerCard(selectedCard); 
  }

const getCenter = (elem) => {
    const center = elem.getBoundingClientRect().left + elem.getBoundingClientRect().width/2;
    return center;
}

const centerCard = (card) => {
    /** Move card to center of carousel container */
    const carouselContainer = document.getElementsByClassName('carousel__container')[0];
    const carousel = document.getElementsByClassName('carousel')[0];

    const cardCenter = getCenter(card)
    const carouselContainerCenter = getCenter(carouselContainer);

    let distanceToMove;
    if (cardCenter < carouselContainerCenter) {
        distanceToMove = carouselContainerCenter - cardCenter;
    } else { 
        distanceToMove = cardCenter - carouselContainerCenter;
    }
    const prevTransformStyle = carousel.style.transform;
    const prevTransformX = prevTransformStyle.replace(/[^-\d.]/g, '');
    const prevTransformX_val = prevTransformX ? parseInt(prevTransformX, 10) : 0;
    if (prevTransformX_val == 0 || prevTransformX_val == "") {
        carousel.style.transform = `translateX(${distanceToMove}px)`
    } else if (cardCenter > carouselContainerCenter) {
        carousel.style.transform = `translateX(${prevTransformX_val-distanceToMove}px)`
    } else {
        carousel.style.transform = `translateX(${prevTransformX_val+distanceToMove}px)`
    }
}


const setInitialCarouselPos = () => {
    const selectedCard = document.getElementsByClassName('carousel__cell--selected')[0];
    centerCard(selectedCard)
  }

const initialize = () => {
    setInitialCarouselPos() 
    setCardOnClicks()
    setButtonOnClicks()
  }
   
  initialize() 
   
