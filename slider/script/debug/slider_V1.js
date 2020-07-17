function Slider(sliderSelector, settings) {
  this.slider = document.querySelector(sliderSelector);
  this.sliderTrack = this.slider.querySelector('.slider-track');
  this.slides = this.slider.querySelectorAll('.slider-item');

  this.SlideToShow = settings.SlideToShow ? settings.SlideToShow : 1;
  this.SlideToScroll = settings.SlideToScroll ? settings.SlideToScroll : 1;
  this.slideWidth = this.slider.offsetWidth / this.SlideToShow;
  this.position = 0;
  this.btnPrev = document.querySelector(settings.btnPrev);
  this.btnNext = document.querySelector(settings.btnNext);
  this.btnPrevFunc = function (func) {
    if (this.btnPrev) {
      func();
    }
  }
  this.btnNextFunc = function (func) {
    if (this.btnNext) {
      func();
    }
  }
  // Устанавливаем нужный размер 
  this.setSize = function () {
    this.slides.forEach(item => {
      item.style.minWidth = this.slideWidth + 'px';
    });
  }
  this.setSize();

  // btn
  this.btnPrevFunc(() => {
    this.btnPrev.addEventListener('click', () => {
      this.translateX((this.slideWidth * this.SlideToScroll));
    })
  })
  this.btnNextFunc(() => {
    this.btnNext.addEventListener('click', () => {
      this.translateX((this.slideWidth * this.SlideToScroll) * -1);
    })
  });
  this.btnControll = (trans) => {
    // btnPrev
    if (this.position + trans >= 0) {
      this.btnPrevFunc(() => {
        this.btnPrev.classList.add('disabled');
      });
    } else {
      this.btnPrevFunc(() => {
        this.btnPrev.classList.remove('disabled');
      });
    }
    // btnNext
    if (this.position + trans <= (this.slideWidth * (this.slides.length - 1) - 1) * -1) {
      this.btnNextFunc(() => {
        this.btnNext.classList.add('disabled');
      });
    } else {
      this.btnPrevFunc(() => {
        this.btnNext.classList.remove('disabled');
      });
    }

  }
  // translate
  this.nextSlides = function () {
    this.translateX((this.slideWidth * this.SlideToScroll) * -1);
  }
  this.prevSlides = function () {
    this.translateX((this.slideWidth * this.SlideToScroll));
  }

  this.translateX = function (trans) {
    this.btnControll(trans);
    if (this.position + trans <= (this.slideWidth * this.slides.length) * -1) { return; }
    else if (this.position + trans > 0) return;

    this.position += trans;
    this.sliderTrack.style.transform = `translateX(${this.position}px)`;
  }
  this.translateX(0);

}


const feebBackSlider = new Slider('#feedbackSlider', {
  SlideToShow: 2,
  SlideToScroll: 1,
  btnNext: '.next',
  btnPrev: '.prev',

});
// document.querySelector('.next').addEventListener('click', function () {
//   feebBackSlider.nextSlides();
// })
