
// add animation for sections when scrolling
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(function() {
    window.addEventListener('scroll', drawGraph);
    function drawGraph() {
      const canvases = document.querySelectorAll('canvas');
      canvases.forEach(item => {
        let progress = 0;
        let timer;
        const canvas = item;
        const ctx = canvas.getContext('2d');
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const radius = 100;
        const startAngle = 1.5 * Math.PI;
        const value = parseInt(canvas.previousElementSibling.innerHTML);
        const counterClockwise = false;
        ctx.lineWidth = 12;
        ctx.strokeStyle = '#ffdf55';
        timer = setInterval(() => {
          const percent = progress * 2 /100;
          const endAngle = (percent + 1.5) * Math.PI;
          ctx.beginPath();
          ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
          ctx.stroke();
          if (progress > value) {
            clearInterval(timer)
          }
          progress++;
        }, 50)
        
        ctx.font = "24px serif";
        ctx.fillText(`${value}%`, 105, 140);
      })
    }
  }, 500);
}

// add heder fixed when scroll
const header = document.getElementById('fixed');

window.addEventListener('scroll', stickyOnScroll);
function stickyOnScroll() {
  if (window.scrollY > 0) {
    header.classList.add('_fixed');
  } else {
    header.classList.remove('_fixed');
  }
}

// Preloader part

let preloader = document.getElementById('preloader');
let pixova = document.getElementById('pixova');
let wrap = document.getElementById('wrap');

setTimeout(function stickyPreloader() {
  window.addEventListener('load', stickyPreloader);
  preloader.classList.add('transparent');
  
}, 3500)

setTimeout(function() {
  pixova.classList.add('transparent');
}, 500)

setTimeout(function() {
  wrap.classList.add('transparent');
}, 500)









