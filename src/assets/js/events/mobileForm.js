const formEvent = () => {
  if (window.matchMedia('(max-width: 576px)').matches) {
    // Execute JavaScript code for mobile devices with a width less than or equal to 480 pixels
    const form = document.querySelector('.form-form');

    // inputs to remove
    const firstNameInput = form.querySelector('.f-name');
    const lastNameInput = form.querySelector('.s-name');

    firstNameInput.remove();
    lastNameInput.remove();

    const wrapper = document.createElement('div');
    wrapper.classList.add('col-12', 'col-lg-6', 'mt-3', 'f-name');

    const fullName = `<div class="col-12 col-lg-6 mt-3 f-name">
    <input type="text" class="form-control" name="f-name" placeholder="Full name" aria-label="Last name" required>
    </div>`;

    wrapper.innerHTML = fullName;
    form.insertAdjacentElement('afterbegin', wrapper);
  }
};

export default formEvent;