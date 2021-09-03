function initCarousel() {
  let carousel = document.querySelector('.carousel');

  let prevElem = carousel.querySelector('.carousel__arrow_left');
  let nextElem = carousel.querySelector('.carousel__arrow_right');
  let slideWidth = carousel.querySelector('.carousel__slide').offsetWidth;
  let innerCarousel = carousel.querySelector('.carousel__inner');

  let position = 0;

  prevElem.style.display = 'none';

  prevElem.addEventListener('click', () => {
    position += slideWidth;

    if (position === 0) {
      nextElem.style.display = '';
      prevElem.style.display = 'none';
    }
    innerCarousel.style.transform = "translateX(" + (position) + "px)";
  });

  nextElem.addEventListener('click', () => {
    position -= slideWidth;
    prevElem.style.display = '';
    
    if (position === -3 * slideWidth) {
      nextElem.style.display = 'none';
    }
    innerCarousel.style.transform = "translateX(" + (position) + "px)";
  });

}
