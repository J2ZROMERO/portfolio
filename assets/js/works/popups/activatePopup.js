import Popup from "./popupModel.js";
import popup from "./popupElements.js";

const activatepopup = () => {
    
const button = document.querySelectorAll('.btn-card');
button.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-bs-target');
    switch (target) {
      case '#budget':
        const budget = new Popup(popup.budget.targetPopup,popup.budget.title,popup.budget.badgesPopup, popup.budget.webm, popup.budget.mp4, popup.budget.png, popup.budget.live, popup.budget.source, popup.budget.description);
        document.body.insertAdjacentHTML('afterbegin', budget.show());
        const budgets = new bootstrap.Modal(document.getElementById('budget'))
        budgets.show();
        break;
      case '#coin':
        const coin = new Popup(popup.coin.targetPopup,popup.coin.title, popup.coin.badgesPopup, popup.coin.webm, popup.coin.mp4, popup.coin.png, popup.coin.live, popup.coin.source, popup.coin.description);
        document.body.insertAdjacentHTML('afterbegin', coin.show());
        const coins = new bootstrap.Modal(document.getElementById('coin'))
        console.log(target)
        coins.show();
        break;
      case '#todo':
        const todo = new Popup(popup.todo.targetPopup,popup.todo.title, popup.todo.badgesPopup, popup.todo.webm, popup.todo.mp4, popup.todo.png, popup.todo.live, popup.todo.source, popup.todo.description);
        document.body.insertAdjacentHTML('afterbegin', todo.show());
        const todos = new bootstrap.Modal(document.getElementById('todo'))
        todos.show();
        break;
      default:
        console.log('anyone selected');
    }  
  });
});

}

export default activatepopup;