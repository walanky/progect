const todoList = document.querySelector(".todolist__list");
const addInput = document.querySelector(".todolist__input");
const addBtn = document.querySelector(".todolist__btn");
let todoArray = [];

let row = JSON.parse(localStorage.getItem("todos"));
if (row) {
	row.forEach(function (item) {
		if (item !== null) {
			todoArray.push(item);
		}
	})
}
setMessages(todoArray);
addBtn.addEventListener("click", () => {
	if (!addInput.value) return;
	let todo = {
		todo: addInput.value,
		id: '',
		important: false,
		checked: false,
	}
	todoArray.push(todo);
	addInput.value = "";
	setMessages(todoArray);
})

function setMessages(alerts) {
	let message = '';
	alerts.forEach(function (item, index) {
		item.id = `todolist__checkbox-${index}`;
		message += ` 
		<li  id="${item.id}" class="todolist__item${item.important ? " important" : ''}">
        <div class="todolist__todo">
          <input ${item.checked ? 'checked' : ''} class="todolist__checkbox" type="checkbox" id="${item.id}"/>
          <label class="todolist__label" for="todolist__checkbox-${index}">${item.todo}</label>
        </div>
        <div class="todolist__btns">
          <button id="${item.id}" class="todolist__important"><img src="image/svg/important.svg" alt=""/></button>
          <button id="${item.id}" class="todolist__delet"><img src="image/svg/delete.svg" alt=""/></button>
        </div>
     </li>
		`
	})
	localStorage.setItem("todos", JSON.stringify(todoArray));
	todoList.innerHTML = message;
}

todoList.addEventListener('click', function () {
	let target = event.target;
	let targetItem = '';
	// Работа с Подчеркиванием
	let todoId = "";
	if (['todolist__item', 'todolist__label'].indexOf(target.className.split(" ")[0]) != -1) {
		if (target.className.split(" ")[0] == "todolist__label") {
			todoId = target.parentElement;
		} else if (target.className.split(" ")[0] == "todolist__item") {
			todoId = target;
		}
		targetItem = todoId;
		todoId = todoId.querySelector(".todolist__checkbox").id;
		todoArray.forEach(function (item) {

			if (item.id == todoId) {
				item.checked = !item.checked;
			}
		})
		setMessages(todoArray);
		return;
	}
	// Работа с важным
	if (target.parentElement.className.split(" ")[0] == "todolist__important") {
		btn = target.parentElement;
		todoArray.forEach(function (item) {
			if (item.id == btn.id) {
				item.important = !item.important;
			}
		})
		setMessages(todoArray);
	}
	// Удаления блока
	if (target.parentElement.className.split(" ")[0] == "todolist__delet") {
		btn = target.parentElement;
		todoArray.forEach(function (item, index) {
			if (item.id == btn.id) {
				delete todoArray[index];
			}
		})
		setMessages(todoArray);
	}
})



