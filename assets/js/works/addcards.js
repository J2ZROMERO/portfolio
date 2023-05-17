import  Card from './card.js';
import popup from './popup.js';

// Insert the new element as the first child of the body
document.body.insertAdjacentHTML('afterbegin',popup);

const imageUrl = '/assets/img/recent_works/board.png';
const cardTitle = 'Nuevo';
const buttons = ['Bu', 'Bn 2', 'Button 3', 'Button 4', 'Button 5', 'Button 5','Butt','Button 5'];

const card = new Card(imageUrl, cardTitle, buttons);
card.setCard('.works');

