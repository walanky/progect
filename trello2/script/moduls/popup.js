const popups = (btnSelector, parentSelector, popupSelector, display = "block") => {
   const parent = document.querySelector(parentSelector);
   const popup = document.querySelector(popupSelector);


   // Создаем события для кнопок
   parent.addEventListener("click", (event) => {
      let target = event.target;
      // Если не подерживается событие
      if (!target) return;
      if (target.id == btnSelector) {
         popup.style.display = display;
      }
   });
   // Убираем popup если человек нажал на свободное поле
   popup.addEventListener("click", (event) => {
      let target = event.target;
      if (!target) return;
      if (target.classList.contains("popup")) {
         popup.style.display = "none";
      }
   })
   // Закрывем все попапы

}
function closePopups() {
   let allPopups = document.querySelectorAll(".popup");
   allPopups.forEach((item) => {
      item.style.display = "none";
   });
}
popups("TodoAppend", ".todos", ".todoAppend", "flex");
popups("TodoStepAppend", ".todos", ".todoStepAppend", "flex");
popups("todoItemPopup", ".todos", ".todoLiAppend", "flex");

