import Popup from './popup.js'

const activatepopup = () => {
    
    // budget popup
const targetPopup = 'budget';
const badgesPopup = ['Rails', 'Ruby', 'MVC', 'EC6', 'Linters', 'RSpec','Device','Render'];
const webm = '/assets/img/recent_works/budget.webm';
const mp4 = '/assets/img/recent_works/budget.mp4';
const jpg = '/assets/img/recent_works/budget.jpg';
const live = 'https://budget-app-v1.onrender.com/';
const source = 'https://github.com/J2ZROMERO/Budget_app';
const description = 'Sign up, confirm, and log in with your credentials.Once you do, you will have access to create your categories and add transactions to them. The website cache will save your credentials and the database of your records.';
const popup = new Popup(targetPopup,badgesPopup,webm,mp4,jpg,live,source,description);




const button = document.querySelector('.btn-card');

button.addEventListener('click', () => {
    // Access the data-bs-target value
    const target = button.getAttribute('data-bs-target');
    switch (target) {
        case '#budget':
            document.body.insertAdjacentHTML('afterbegin',popup.show());
        break;
        // Perform any other desired actions
        default:
        console.log('default');
    }  
});

}

export default activatepopup;