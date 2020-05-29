const openTodo = (todos) => {
   const todoList = document.querySelector(".todos__list");

   todoList.addEventListener("click", (event) => {
      let target = event.target;

      if (!target) return;
      // Достаем нужный нам туду
      if (target.classList.contains("todos__todo")) {
         let todo = todos[+target.getAttribute("data-todoNumber")];
         if (!todo) return;
         todoThisDraw(todo);
         // Ставим свою форму
         document.querySelector("#todoStepAppendForm").setAttribute("data-number", +target.getAttribute("data-todoNumber"));
         document.querySelector(".todos").setAttribute("data-number", +target.getAttribute("data-todoNumber"));
         document.querySelector(".todos__back").style.display = "flex";
         document.querySelector(".todos__settings").style.display = "flex";

      }
   })
}