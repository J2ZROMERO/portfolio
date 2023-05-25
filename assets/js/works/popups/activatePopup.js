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
      case '#math':
        const math = new Popup(popup.math.targetPopup,popup.math.title, popup.math.badgesPopup, popup.math.webm, popup.math.mp4, popup.math.png, popup.math.live, popup.math.source, popup.math.description);
        document.body.insertAdjacentHTML('afterbegin', math.show());
        const maths = new bootstrap.Modal(document.getElementById('math'))
        maths.show();
        break;
      case '#book':
        const books = new Popup(popup.books.targetPopup,popup.books.title, popup.books.badgesPopup, popup.books.webm, popup.books.mp4, popup.books.png, popup.books.live, popup.books.source, popup.books.description);
        document.body.insertAdjacentHTML('afterbegin', books.show());
        const bookss = new bootstrap.Modal(document.getElementById('books'))
        bookss.show();
        break;
      case '#leader':
        const leader = new Popup(popup.leader.targetPopup,popup.leader.title, popup.leader.badgesPopup, popup.leader.webm, popup.leader.mp4, popup.leader.png, popup.leader.live, popup.leader.source, popup.leader.description);
        document.body.insertAdjacentHTML('afterbegin', leader.show());
        fetch(popup.leader.webm)
        .then(response => {
          if (response.ok) {
          console.log('Video is available.');
          // Proceed with your desired logic
          } else {
          console.log('Video encountered a 404 error.');
          document.querySelector('.video-container__son').style.display = 'none';
          const imgCard = document.querySelector('.video-container');
          imgCard.style.backgroundImage = `url(${popup.leader.png})`;
          imgCard.style.backgroundSize = 'cover';
          imgCard.style.backgroundPosition = 'top';
          imgCard.style.backgroundRepeat = 'no-repeat';

          }
          })
  .catch(error => {
    console.log('An error occurred while fetching the video:', error);
    // Handle the error
  });
        const leaders = new bootstrap.Modal(document.getElementById('leader'))
        leaders.show();
        break;
      case '#responsive':
        const responsive = new Popup(popup.responsive.targetPopup,popup.responsive.title, popup.responsive.badgesPopup, popup.responsive.webm, popup.responsive.mp4, popup.responsive.png, popup.responsive.live, popup.responsive.source, popup.responsive.description);
        document.body.insertAdjacentHTML('afterbegin', responsive.show());
        const responsives = new bootstrap.Modal(document.getElementById('responsive'))
        responsives.show();
        break;
      default:
        console.log('anyone selected');
    }  
  });
});

}

export default activatepopup;