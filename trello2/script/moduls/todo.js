const todo = (todos) => {


   todoListForm();
   todoForm(todos);
   todoMainDraw(todos);
   openTodo(todos);

   const todoDel = document.querySelector(".todos__settings");
   const todoList = document.querySelector(".todos");


   document.querySelector(".todos__back").addEventListener("click", () => {
      todoMainDraw(todos);
      document.querySelector(".todos__back").style.display = "none";
      document.querySelector(".todos__settings").style.display = "none";
      document.querySelector(".trello__title").innerHTML = "Ваши Туду";
      closePopups();
   });

   // Удаления туду
   todoDel.addEventListener("click", () => {
      let todoNum = +todoList.getAttribute("data-number");
      todos.splice(todoNum, 1);
      todoMainDraw(todos);
      document.querySelector(".trello__title").innerHTML = "Ваши Тодо";
      document.querySelector(".todos__settings").style.display = "none";
      document.querySelector(".todos__back").style.display = "none";
      document.querySelector(".trello__title").innerHTML = "Ваши Туду";
      localStorage.setItem("todo", JSON.stringify(todos))
   });
   // Удаления шага в тубу
   todoList.addEventListener("click", (e) => {
      let target = e.target;
      if (!target) return;
      if (target.classList.contains("todo-item")) {
         let todoId = +target.querySelector("[data-num]").getAttribute("data-num");
         todos[+todoList.getAttribute("data-number")].step.splice(todoId, 1);
         todoThisDraw(todos[+todoList.getAttribute("data-number")]);
         localStorage.setItem("todo", JSON.stringify(todos))
      }
   })
   // Удаления тега в туду 
   todoList.addEventListener("click", (e) => {
      let target = e.target;
      if (!target) return;
      if (target.classList.contains("todo-item__item")) {
         console.log("да да я");

         let todoId = target.parentElement.parentElement.querySelector("[data-num]").getAttribute("data-num");
         let childNum = 0;
         let todoList = target.parentElement;
         let child = todoList.childNodes;
         // Получаем номер лишки
         for (i = 0;child.length;i++) {
            if (!child[i]) break;
            childNum++;
            if (child[i] == target) {
               break;
            }
         }

         todos[+document.querySelector(".todos").getAttribute("data-number")].step[todoId].list.splice(childNum / 2 - 1, 1);
         localStorage.setItem("todo", JSON.stringify(todos));
         todoThisDraw(todos[+document.querySelector(".todos").getAttribute("data-number")]);
      }
   })
}
