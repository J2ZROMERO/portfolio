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
      <div class="modal-body row">
        <div class="col-5">
          <h2>Modal title</h2> 
        </div>
        
        <div class="col-7 text-end">
        
        <a href=""><button type="button" class="btn btn-success">See Live <i class="fab fa-github ps-2"></i></button></a>
        <a href=""><button type="button" class="btn btn-success">See Live <i class="fab fa-github ps-2"></i></button></a>


        </div>

        <div class="">
        <span class="badge bg-secondary">Success</span>
        </div>
        <div>
          <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati assumenda non sit sequi maiores. Cum voluptates harum, velit voluptas, in culpa rem tenetur totam facere commodi saepe, explicabo repellat!
              
              
          </h6>
        </div>
      </div>
    </div>
  </div>
</div>`;
  
export default popup;