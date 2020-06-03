const todoMainDraw = (todo) => {
   const todoList = document.querySelector(".todos__list");
   let message = `
      <div class="todos__append todos__item " id="TodoAppend">
            Добавить туду
      </div>
   `;
   todo.forEach((item, index) => {
      message += `
      <div class="todos__todo todos__item fadeIn" data-todoNumber=${index}>
            ${item.title}
       </div>
      `;
   })
   todoList.innerHTML = message;
}

const todoThisDraw = (todo) => {
   const todoList = document.querySelector(".todos__list");
   let message = `
    <div class="todos__append todos__item" id="TodoStepAppend">
       Добавить туду
     </div>
   `;
   let stepList = "";
   document.querySelector(".trello__title").innerHTML = todo.title;
   // ===== Формируем весь вывод
   if (todo.step) {
      // ======== Создаем лист в нутри шага
      // Есть ли у туду шаги
      todo.step.forEach((step, index) => {
         let stepList = "";
         if (step && step.list) {
            step.list.forEach((item) => {
               if (item) {
                  stepList += `
                  <li class="todo-item__item">${item}</li>
               `;
               }
            })
         }
         if (step) {
            message += `
            <div class="todo-item fadeLeft">
                     <div class="todo-item__title">
                       ${step.title}
                     </div>
                     <ul class="todo-item__list">
                        ${stepList} 
                     </ul>
                     <div class="todo-item__footer" id="todoItemPopup" data-num="${index}">Добавить действие</div>
               </div>
            `
         }

      })
   }
   todoList.innerHTML = message;
}