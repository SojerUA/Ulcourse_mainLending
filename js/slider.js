

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

function nextSlide() {
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
const line = document.querySelector('.line');
const cards = document.querySelectorAll('.card');
const sliderWidth = document.querySelector('.slideshow').offsetWidth;
const showAllSlides = document.getElementById('show-all-btn');
let widthArray = [0];
let lineWidth = 0;
let offsets = 0;
let step = 0;

// Function definition
for (let i = 0; i < cards.length; i++) {
  widthArray.push(cards[i].offsetWidth);
  lineWidth += cards[i].offsetWidth;
}

line.style.Width = `${lineWidth} px`;

function showSlides () {
  restWidth = lineWidth - sliderWidth;
  if (restWidth >= 0 ) {
    offsets = offsets + widthArray[step];
    line.style.left = `${-offsets}px`;
  } else {
    line.style.left = `${-(lineWidth - sliderWidth)}px`;
    offsets = 0;
    step = -1;
  }
  if (step + 1 == slides.length) {
    step = 0;
    offsets = 0;
  } else {
    step++;
  }
}

// Button handle event
showAllSlides.addEventListener('click', showSlides);
