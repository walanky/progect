(function () {
  const btnNext = document.querySelector('.banner-slider__arrow.next');
  const btnPrev = document.querySelector('.banner-slider__arrow.prev');
  const slider = document.querySelector('.banner-slider');
  const banner = new Slider('.banner-slider', {
    btnNext,
    btnPrev,
    dots: true,
  });

  btnNext.addEventListener('click', () => {
    banner.scrollSlide('next');
  });
  btnPrev.addEventListener('click', () => {
    banner.scrollSlide('prev');
  });
  setInterval(() => {
    banner.scrollSlide('next');
  }, 5 * 1000)
  slider.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('slides-btns')) {
      let scrollWidth = target.getAttribute('data-translate') * banner.slidesWidth * -1;
      banner.newPositions(scrollWidth);
    }
  })
  window.addEventListener('resize', () => {
    banner.slidesWidth = banner.sliderTrack.offsetWidth / banner.SlideToShow;
    banner.SlideWidth();
  })
})();

(function () {
  const btnNext = document.querySelector('.variables-slider__arrow.next');
  const btnPrev = document.querySelector('.variables-slider__arrow.prev');
  const slider = document.querySelector('.variables-slider');
  const variables = new Slider('.variables-slider', {
    btnNext,
    btnPrev,
    SlideToShow: 4,
  });

  btnNext.addEventListener('click', () => {
    variables.scrollSlide('next');
  });
  btnPrev.addEventListener('click', () => {
    variables.scrollSlide('prev');
  });

  slider.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('slides-btns')) {
      let scrollWidth = target.getAttribute('data-translate') * variables.slidesWidth * -1;
      variables.newPositions(scrollWidth);
    }
  })
  function setSlideToshow() {
    if (document.documentElement.clientWidth < 780) { variables.SlideToShow = 2 }
    if (document.documentElement.clientWidth < 580) { variables.SlideToShow = 1 }
    if (document.documentElement.clientWidth > 780) { variables.SlideToShow = 4 }

    variables.slidesWidth = variables.sliderTrack.offsetWidth / variables.SlideToShow;
    variables.SlideWidth();
  }
  window.addEventListener('resize', () => {
    setSlideToshow();
  });
  setSlideToshow();
})();


(function () {
  // HIDE/SHOW MENU
  const menu = document.querySelector('.menu');
  const menuOpen = document.querySelector('.menu__adaptiv-btn');
  const menuClose = document.querySelector('.menu__close');
  const body = document.querySelector('body');
  menuOpen.addEventListener('click', () => {
    menu.classList.add('active');
    body.classList.add('body-lock');
  })
  menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.remove('body-lock');
  })
})();