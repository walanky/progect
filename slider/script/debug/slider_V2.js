function slider(sliderSelector, settings = {}) {
  const slider = document.querySelector(sliderSelector);
  const sliderTrack = slider.querySelector('.slider-track');
  const slides = slider.querySelectorAll('.slider-item');

  let positions = 0;
  // Size slider
  const SlideToShow = settings.SlideToShow ? settings.SlideToShow : 1;
  const SlideToScroll = settings.SlideToScroll ? settings.SlideToScroll : 1;
  let slideWidth = sliderTrack.offsetWidth / SlideToShow;
  slides.forEach(slide => {
    slide.style.minWidth = slideWidth + 'px';
  });
  // buttons
  isSettings('buttons', () => {
    if (settings.buttons != true) return;
    const btns = document.createElement('div');
    btns.classList.add("slider-buttons");
    btns.innerHTML += `<button class='slider-btn btn-prev' data-vector='prev'>prev</button>`;
    btns.innerHTML += `<button class='slider-btn btn-next' data-vector='next'>next</button>`;
    slider.append(btns);
  })

  slider.addEventListener('click', (e) => {
    const target = e.target;
    // Кнопки
    if (target.classList.contains('slider-btn')) {
      const vector = target.getAttribute('data-vector');
      transBtns(vector);
    }
  })
  function transBtns(vector) {
    if (positions + (slideWidth * SlideToScroll) * -1 > slideWidth * slides.length * -1) {

    }
    if (vector === 'next' && positions + (slideWidth * SlideToScroll) * -1 > slideWidth * slides.length * -1) {
      translateX(positions + (slideWidth * SlideToScroll * -1))
    }
    else if (vector === 'prev' && positions + (slideWidth * SlideToScroll) <= 0) {
      translateX(positions + (slideWidth * SlideToScroll));
    }
  };
  function translateX(distances) {
    positions = distances;
    sliderTrack.style.transform = `translateX(${positions}px)`
  }
  function isSettings(param, func) {
    if (settings[param]) {
      func();
    }
  }
}

slider('#feedbackSlider', {
  buttons: true,
});