import Card from './cardModel.js';
import cardElements from './cardElements.js';

const showCards = () => {

    cardElements.forEach((card, index) => {
    const cardInstance = new Card(card.imageUrl, card.cardTitle, card.badgesCard, card.targetCard, index);
    cardInstance.setCard('.works__row');
  
    const imgCard = document.querySelector(`.bg__image${index}`);
    imgCard.style.backgroundImage = `url(${card.imageUrl})`;
    imgCard.style.backgroundSize = 'cover';
    imgCard.style.backgroundPosition = 'top';
    imgCard.style.backgroundRepeat = 'no-repeat';
  });

}
export default showCards;
  