class Card {
    constructor(imageUrl, cardTitle, buttons) {
        this.imageUrl = imageUrl;
        this.cardTitle = cardTitle;
        this.buttons = buttons;
    }

    createButtonElements = (buttons) => {
        return buttons.map(buttonText => `<button type="button" class="btn btn-light m-1">${buttonText}</button>`).join('');
    }

    createCard = () => {
        return  `<div class="row works__row justify-content-center">
        <div class="card border-success works__row-card m-3" style="width: 18rem;">
          <div class="overflow-hidden works__row-card__image">
            <img src="${this.imageUrl}" class="card-img-top" alt="...">
          </div>
          <div class="card-body text-center works__row-body">
            <h5 class="card-title d-block pb-2">${this.cardTitle}</h5>
            ${this.createButtonElements(this.buttons)}
            <a class="d-block pt-3" href="#"><button type="button" class="btn btn-success" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Success</button></a>
          </div>
        </div>
        </div>`;
    }

    setCard = (parent) => {
        const parentElement = document.querySelector(parent);
        parentElement.innerHTML = this.createCard();
      }
}

export default Card;
