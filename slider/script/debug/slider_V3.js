function Slider(sliderSelector, setting = {}) {
  this.slider = document.querySelector(sliderSelector);
  this.sliderTrack = this.slider.querySelector('.slider-track');
  this.slides = this.slider.querySelectorAll('.slider-item');
  this.SlideToShow = setting.SlideToShow ? setting.SlideToShow : 1;
  this.SlideToScroll = setting.SlideToScroll ? setting.SlideToScroll : 1;
  this.slidesWidth = this.sliderTrack.offsetWidth / this.SlideToShow;
  this.positions = 0;


  this.slides.forEach((item) => {
    item.style.minWidth = this.slidesWidth + 'px';
  })
  this.newPositions = function (pos) {
    this.controllBtns(pos);
    if (pos > 0) { return; };
    if (pos <= this.slidesWidth * this.slides.length * -1) { return; };
    this.positions = pos
    this.sliderTrack.style.transform = `translate(${pos}px)`;
  }
  this.controllBtns = function (pos) {
    this.isSettings('btnNext', () => {
      if (pos <= this.slidesWidth * (this.slides.length - 1) * -1) {
        setting.btnNext.classList.add('disabled');
      } else {
        setting.btnNext.classList.remove('disabled');
      }
    })
    this.isSettings('btnPrev', () => {
      if (pos >= 0) {
        setting.btnPrev.classList.add('disabled');
      } else {
        setting.btnPrev.classList.remove('disabled');
      }
    })

  }
  // slides size
  this.scrollSlide = function (vector) {
    if (vector == 'next') {
      this.newPositions(this.positions + (this.slidesWidth * this.SlideToScroll * -1));
    } else if (vector == 'prev') {
      this.newPositions(this.positions + (this.slidesWidth * this.SlideToScroll));
    }
  }
  this.isSettings = function (param, func) {
    if (setting[param]) {
      func();
    }
  }
  this.controllBtns(this.positions);
}


const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

const feedback = new Slider('.slider', {
  btnNext,
  btnPrev,
});

btnNext.addEventListener('click', () => {
  feedback.scrollSlide('next');
})
btnPrev.addEventListener('click', () => {
  feedback.scrollSlide('prev');
})