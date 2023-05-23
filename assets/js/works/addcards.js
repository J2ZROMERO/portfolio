import  Card from './card.js';
// import activatepopup from './popups/activatePopup.js'
// budget card 
const imageUrl = '/assets/img/recent_works/budget.png';
const cardTitle = 'Budget App';
const badgesCard = ['Rails', 'Ruby', 'MVC', 'EC6', 'Linters', 'RSpec','Device','Render'];
const targetCard = 'budget';
const card = new Card(imageUrl, cardTitle, badgesCard,targetCard);
card.setCard('.works__row');

const imageUrls = '/assets/img/recent_works/board.png';
const cardTitles = 'Budget App';
const badgesCards = ['Rails', 'Ruby', 'MVC', 'EC6', 'Linters', 'RSpec','Device','Render'];
const targetCards = 'budget';
const cards = new Card(imageUrls, cardTitles, badgesCards,targetCards);
cards.setCard('.works__row');


const imageUrlss = '/assets/img/recent_works/board.png';
const cardTitless = 'Budget App';
const badgesCardss = ['Rails', 'Ruby', 'MVC', 'EC6', 'Linters', 'RSpec','Device','Render'];
const targetCardss = 'budget';
const cardss = new Card(imageUrlss, cardTitless, badgesCardss,targetCardss);
cardss.setCard('.works__row');
// activatepopup();