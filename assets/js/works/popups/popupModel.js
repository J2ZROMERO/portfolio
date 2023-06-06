// Exporting a method directly

class Popup {
  constructor(target, title, badges, webm, jpg, live, source, description) {
    this.target = target;
    this.title = title;
    this.badges = badges;
    this.webm = webm;
    this.jpg = jpg;
    this.live = live;
    this.source = source;
    this.description = description;
  }

   createBadgetsElements = (badges) => badges.map((badges) => `<span class="badge bg-secondary mt-2 me-2">${badges}</span>`).join('')

  show = () => ` <div class="modal fade" data-bs-backdrop="static" id=${this.target} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header video-container">
          <div class="position-absolute top-0 end-0 video-container-close">  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
        
          <div class="modal-body overflow-hidden">
          <video class="image w-100 video-container__son" controls autoplay>
          <source src=${this.webm} type="video/webm">
          <source src=$this.mp4} type="video/mp4">
          <img src=${this.jpg} alt="Imagen de muestra">
        </video>
        </div>
          </div>
          <div class="modal-body row modal-body-popup">
            <div class="col-12 col-sm-6 fs-5 modal-body-popup__title">
              <h2>${this.title}</h2> 
            </div>
            
            <div class="col-12 col-sm-6 text-end modal-body-popup__button">
            
            <a href=${this.live} target="_blank"><button type="button" class="btn btn-success font-bottons-popup">See Live <i class="fa-solid fa-rocket ps-2"></i></button></a>
            <a href=${this.source} target="_blank" class="modal-body-popup__button--source" ><button type="button" class="btn btn-success font-bottons-popup">See Source <i class="fab fa-github ps-2"></i></button></a>
            </div>
    
            <div class="pt-1 modal-body-popup__badgets">
            
            ${this.createBadgetsElements(this.badges)}
    
            </div>
            <div class="mt-4 modal-body-popup__description">
              <h6 class="popup">
                  ${this.description}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>`
}

export default Popup;