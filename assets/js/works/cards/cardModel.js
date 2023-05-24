class Card {
    constructor(imageUrl, cardTitle, badges, target,index) {
        this.imageUrl = imageUrl;
        this.cardTitle = cardTitle;
        this.badges = badges;
        this.target = target;
        this.index = index;
    }

    createBadgetsElements = (badges) => {
      return badges.map(badges => `<span class="badge bg-secondary mt-2 me-2">${badges}</span>`).join('');
    }


    createCard = () => {
        return  `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
        <div class="row works__row justify-content-center">
        <div class="card border-success works__row-card m-3" style="width: 18rem;">
          <div class="overflow-hidden works__row-card__image bg__image${this.index}">
            
          </div>
          <div class="text-center works__row-body pt-1">
            <h5 class="card-title d-block pb-2">${this.cardTitle}</h5>
            ${this.createBadgetsElements(this.badges)}
            <a class="d-block pt-3 pb-2" href="#"><button type="button" class="btn btn-success btn-card" 
                data-bs-target="#${this.target}">See Project</button></a>
          </div>
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
