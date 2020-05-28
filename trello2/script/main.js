"use strict";
// Массив со всеми todo 
const todos = [];
// Достаем данные из localStorage
const todosLocal = JSON.parse(localStorage.getItem("todo"));
if (todosLocal) {
   todosLocal.forEach((item) => {
      todos.push(item);
   })
}
todo(todos);