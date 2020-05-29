const todoForm = (todos) => {
   const todoForms = document.querySelectorAll(".todos__form");

   // Обрабатываем форму для добовления туду
   todoForms.forEach((form) => {
      form.addEventListener("submit", (event) => {

         event.preventDefault();
         let input = form["todo"];
         // Ничего не делаем, если инпут пустой
         if (!input.value) return;
         let todo = {
            title: input.value,
            step: [],
         }
         switch (form.id) {
            case "todoAppendForm":
               todos.push(todo);
               todoMainDraw(todos);
               break;
            case "todoStepAppendForm":
               todoItem = todos[+form.getAttribute("data-number")].step.push({ title: input.value });
               todoThisDraw(todos[+form.getAttribute("data-number")]);
               break;
            case "todoLiAppend":
               todoItem = todos[+document.querySelector(".todos").getAttribute("data-number")];
               let todoNum = +form.getAttribute("data-listnum");
               if (!todoItem.step[todoNum].list) {
                  todoItem.step[todoNum].list = [];
               }
               todoItem.step[todoNum].list.push(input.value);
               todoThisDraw(todoItem);
               break;
         }
         // функция из popups.js;
         closePopups();
         input.value = "";
         localStorage.setItem("todo", JSON.stringify(todos));
      });
   })
}