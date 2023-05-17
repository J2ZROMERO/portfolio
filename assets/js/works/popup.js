// Exporting a method directly
const createButtonElements = (buttons) => {
  return buttons.map(buttonText => `<button type="button" class="btn btn-light m-1">${buttonText}</button>`).join('');
}
const buttons = ['Bu', 'Bn 2', 'Button 3', 'Button 4', 'Button 5', 'Button 5','Butt','Button 5'];

const popup = `
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header flex-column">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    
      <div class="modal-body">
      <video class="image w-100" controls autoplay>
      <source src="/assets/img/recent_works/course.webm" type="video/webm">
      <source src="/assets/img/recent_works/course.mp4" type="video/mp4">
      <img src="/assets/img/recent_works/course.jpg" alt="Imagen de muestra">
    </video>
    </div>
      </div>
      <div class="modal-boy row">
<div class="col-8">
       <h1>Modal title</h1> 
       </div>
      <div class="col-4">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
      </div>
      <div>
    ${createButtonElements(buttons)};
      </div>
        </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;
  
export default popup;