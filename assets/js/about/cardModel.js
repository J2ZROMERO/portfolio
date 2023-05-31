class Card {
    constructor(imageUrl, cardTitle, badges) {
        this.imageUrl = imageUrl;
        this.cardTitle = cardTitle;
        this.badges = badges;
    }

    createBadgetsElements = (badges) => {
      return badges.map(badges => `<span class="badge bg-white mt-2 ms-1 me-1 text-success">${badges}</span>`).join('');
    }


    createCard = () => {
        return  `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 d-flex justify-content-center">
        <div class="card about-me__cards bg-secondary mb-5" style="width: 18rem;">

        ${this.imageUrl}
        <h1 class="text-center">${this.cardTitle}
        </h1>
        <div class="about-me__cards-badges mt-4 pb-4">
          ${this.createBadgetsElements(this.badges)}
        </div>
        </div>
        </div>
        `;
    }

    setCard = (parent) => {
        const parentElement = document.querySelector(parent);
        parentElement.innerHTML += this.createCard();
      }
}

export default Card;
