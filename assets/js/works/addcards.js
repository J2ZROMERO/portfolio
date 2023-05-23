import  Card from './card.js';
import activatepopup from './popups/activatePopup.js'

const cards = [
    {
    // budget card 
      imageUrl: '/assets/img/recent_works/budget.png',
      cardTitle: 'Budget App',
      badgesCard: ['Rails', 'Ruby', 'MVC', 'EC6', 'Linters', 'RSpec', 'Device', 'Render'],
      targetCard: 'budget',
    },
    {
    // coin stats
      imageUrl: '/assets/img/recent_works/coin.png',
      cardTitle: 'Coint stats',
      badgesCard: ['Babel', 'React-Redux', 'External API', 'Netlify', 'Linters', 'RSpec','Jest'],
      targetCard: 'budget',
    },
    
    
];

cards.forEach((card, index) => {
    const cardInstance = new Card(card.imageUrl, card.cardTitle, card.badgesCard, card.targetCard, index);
    cardInstance.setCard('.works__row');
  
    const imgCard = document.querySelector(`.bg__image${index}`);
    imgCard.style.backgroundImage = `url(${card.imageUrl})`;
    imgCard.style.backgroundSize = 'cover';
    imgCard.style.backgroundPosition = 'top';
    imgCard.style.backgroundRepeat = 'no-repeat';
  });
  
  


activatepopup();