// slider  
function sliderS3() {

  let prev = document.querySelector('.slider_s3__prev');
  let next = document.querySelector('.slider_s3__next');
  let slides = document.querySelectorAll('.slider_s3__slide');
  let dots = document.querySelectorAll('.slider_s3__dot');
  let index = 0;

  let activeSlide = n => {
    for (let slide of slides) {
      slide.classList.remove('active');
    }
    slides[n].classList.add('active');
  }

  let activeDot = n => {
    for (let dot of dots) {
      dot.classList.remove('active');
    }
    dots[n].classList.add('active');
  }

  let nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      activeSlide(index);
      activeDot(index);
    } else {
      index++;
      activeSlide(index);
      activeDot(index);
    }
  }
  setInterval(nextSlide, 5000);
  next.addEventListener('click', nextSlide);

  let prevSlide = () => {
    if (index == 0) {
      index = slides.length - 1;
      activeSlide(index);
      activeDot(index);
    } else {
      index--;
      activeSlide(index);
      activeDot(index);
    }
  }
  prev.addEventListener('click', prevSlide);

  dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      activeSlide(index);
      activeDot(index);
    })
  });
}
sliderS3();