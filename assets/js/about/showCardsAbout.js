import Card from './cardModel.js';
import cardElements from './cardElements.js';

const showCardsAbout = () => {
  cardElements.forEach((card) => {
    const cardInstance = new Card(card.imageUrl, card.cardTitle, card.badgesCard);
    cardInstance.setCard('.cards-container__row');
  });
};
export default showCardsAbout;
