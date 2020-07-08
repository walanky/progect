(function () {
  const openBtns = document.querySelectorAll('.popupOpen');
  const closeBtns = document.querySelectorAll('.popupClose');
  const popups = document.querySelectorAll('.popup');
  const body = document.querySelector('body');
  console.log(body);
  // Open
  openBtns.forEach((openBtn) => {
    openBtn.addEventListener('click', () => {
      const popupID = openBtn.getAttribute('href')
      if (!popupID) return;
      const popup = document.querySelector(popupID);
      popup.classList.add('active');
      body.style.overflow = 'hidden';

    })
  });
  // close
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      const popup = closeBtn.closest('.popup');
      if (!popup) return;
      popup.classList.remove('active');
      body.style.overflow = '';

    })
  })
  // нажатия на попап
  popups.forEach((popup) => {
    popup.addEventListener('click', (e) => {
      let target = e.target;
      if (!target.closest(".popup-body")) {
        popup.classList.remove('active');
        body.style.overflow = '';
      }
    })
  })
})();