// Этот модуль нужен для того чтобы
// передовать в форму текущий лист
const todoListForm = () => {
   const todoList = document.querySelector(".todos");
   const todoForm = document.querySelector("#todoLiAppend");
   todoList.addEventListener("click", (event) => {
      let target = event.target;
      if (!target) return;

      if (target.id === "todoItemPopup") {
         todoForm.setAttribute("data-listNum", target.getAttribute("data-num"));
      }
   })
}