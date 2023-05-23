import Popup from './popup.js'

const activatepopup = () => {
    
    // budget popup
const popups = {
 budget: {
         targetPopup : 'budget',
         badgesPopup : ['Rails', 'Ruby', 'MVC', 'EC6', 'Linters', 'RSpec','Device','Render'],
         webm : '/assets/img/recent_works/budget.webm',
         mp4 : '/assets/img/recent_works/budget.mp4',
         png : '/assets/img/recent_works/budget.png',
         live : 'https://budget-app-v1.onrender.com/',
         source : 'https://github.com/J2ZROMERO/Budget_app',
         description : 'Sign up, confirm, and log in with your credentials.Once you do, you will have access to create your categories and add transactions to them. The website cache will save your credentials and the database of your records.',
    },
    coin: {
        targetPopup : 'coin',
        badgesPopup : ['Babel', 'React-Redux', 'External API', 'Netlify', 'Linters', 'RSpec','Jest'],
        webm : '/assets/img/recent_works/coin.webm',
        mp4 : '/assets/img/recent_works/coin.mp4',
        png : '/assets/img/recent_works/coin.png',
        live : 'https://phenomenal-donut-e18495.netlify.app/',
        source : 'https://github.com/J2ZROMERO/Coin-Stats',
        description : 'By dispatching the state of React-Redux to retrieve data from a cryptocurrency API, the interface offers details about various coins, while providing links to their official pages for reference.',
    }
}



const button = document.querySelectorAll('.btn-card');
button.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-bs-target');
    switch (target) {
      case '#budget':
        const budget = new Popup(popups.budget.targetPopup, popups.budget.badgesPopup, popups.budget.webm, popups.budget.mp4, popups.budget.png, popups.budget.live, popups.budget.source, popups.budget.description);
        document.body.insertAdjacentHTML('afterbegin', budget.show());
        const budgets = new bootstrap.Modal(document.getElementById('budget'))
        budgets.show();
        break;
      case '#coin':
        const coin = new Popup(popups.coin.targetPopup, popups.coin.badgesPopup, popups.coin.webm, popups.coin.mp4, popups.coin.png, popups.coin.live, popups.coin.source, popups.coin.description);
        document.body.insertAdjacentHTML('afterbegin', coin.show());
        const coins = new bootstrap.Modal(document.getElementById('coin'))
        console.log(target)
        coins.show();
        break;
      default:
        console.log('anyone selected');
    }  
  });
});

}

export default activatepopup;