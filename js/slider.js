

// Finds elements
const showPrevBtn = document.getElementById('show-prev-btn');
const showNextBtn = document.getElementById('show-next-btn');
const slides = document.querySelectorAll('.slide');

let index = 0;

// Function definition
const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('slider-active');
  }
  slides[n].classList.add('slider-active');
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length -1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

// Button handle events
showNextBtn.addEventListener('click', nextSlide);
showPrevBtn.addEventListener('click', prevSlide);

// Finds elements
const images = document.querySelectorAll('.card');
const sliderLine = document.querySelector('.line');
let count = 0;
let width;

function innit() {
  width = document.querySelector('.slideshow').offsetWidth;
  sliderLine.style.width =`${width * images.length}px`;
  images.forEach( item => {
    item.style.width = `${width}px`;
    item.style.height = 'auto';
  });
  rollSlider();
}

window.addEventListener('resize', innit);
innit();

let prevBtn = document.getElementById('prev-btn');
prevBtn.addEventListener('click', function() {
  count--;
  if (count < 0) {
    count = images.length - 2;
  }
  rollSlider();
});

let nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function() {
  count++;
  if (count >= images.length - 1) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * (width/2)+ 'px';
}

