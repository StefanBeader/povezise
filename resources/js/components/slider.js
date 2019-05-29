let slides = [];
let activeSlide = 0;
let scrollTimer = 6000;

slides = document.getElementsByClassName('slide');
showSlide(slides[activeSlide]);

setInterval(nextSlide, scrollTimer);

function nextSlide() {
  handleSlideChange('next')
}

function previousSlide() {
  handleSlideChange('previous')
}

function handleSlideChange(direction) {
  let slideToHide = slides[activeSlide];
  if (direction === 'next') {
    if (activeSlide + 1 <= slides.length -1) {
      activeSlide++;
    } else {
      activeSlide = 0;
    }
  } else {
    if (activeSlide - 1 < 0) {
      activeSlide = slides.length - 1;
    } else {
      activeSlide--;
    }

  }
  hideSlide(slideToHide);
  showSlide(slides[activeSlide]);
}

function showSlide(el) {
    el.classList.add('show');
}

function hideSlide(el) {
    el.classList.remove('show');
}