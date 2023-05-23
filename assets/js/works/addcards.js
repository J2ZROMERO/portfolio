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
    
];

cards.forEach((card) => {
    const cards = new Card(card.imageUrl, card.cardTitle, card.badgesCard, card.targetCard);
    cards.setCard('.works__row');
});



activatepopup();