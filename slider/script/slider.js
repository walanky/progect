function Slider(sliderSelector, setting = {}) {
  this.slider = document.querySelector(sliderSelector);
  this.sliderTrack = this.slider.querySelector('.slider-track');
  this.slides = this.slider.querySelectorAll('.slider-item');
  this.SlideToShow = setting.SlideToShow ? setting.SlideToShow : 1;
  this.SlideToScroll = setting.SlideToScroll ? setting.SlideToScroll : 1;
  this.slidesWidth = this.sliderTrack.offsetWidth / this.SlideToShow;
  this.positions = 0;


  this.SlideWidth = function () {
    this.slides.forEach((item) => {
      item.style.minWidth = this.slidesWidth + 'px';
    })
  }
  this.SlideWidth();
  this.newPositions = function (pos) {

    this.controllBtns(pos);
    if (pos > 0) { pos = 0; };
    if (pos <= this.slidesWidth * (this.slides.length - this.SlideToShow) * -1) { pos = this.slidesWidth * (this.slides.length - this.SlideToShow) * -1 };
    this.positions = pos
    this.sliderTrack.style.transform = `translate(${pos}px)`;
  }
  this.controllBtns = function (pos) {
    this.isSettings('btnNext', () => {
      if (pos <= this.slidesWidth * (this.slides.length - this.SlideToShow) * -1) {
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
  this.setDots = function () {
    this.isSettings('dots', () => {
      if (setting.dots != true) return;

      this.dots = document.createElement('ul');
      this.dots.classList.add('slider-dots')
      this.slides.forEach((item, index) => {
        this.dots.innerHTML += `<li><button class='slides-btns' data-translate='${index}'>${index + 1}</button></li>`
      })
      this.slider.append(this.dots);
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
  this.setDots();
  this.controllBtns(this.positions);
}


