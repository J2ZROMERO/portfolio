const navSlide = () => {
// scroll to the hello section
  document.querySelector('#hello').addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // scroll to the hello section
  document.querySelector('#portfolio').addEventListener('click', (event) => {
    event.preventDefault();
    const portfolio = document.querySelector('.works');
    portfolio.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
  });

  // scroll to the hello section
  document.querySelector('#about').addEventListener('click', (event) => {
    event.preventDefault();
    const aboutSection = document.querySelector('.about-me');
    aboutSection.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
  });

  // scroll to the hello section
  document.querySelector('#contact').addEventListener('click', (event) => {
    event.preventDefault();
    const contact = document.querySelector('.form');
    contact.scrollIntoView({ behavior: 'smooth' }); // scroll to the About section
  });
};

export default navSlide;