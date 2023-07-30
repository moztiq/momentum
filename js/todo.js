const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"
let toDos = []

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function handleDeleteTodo(event) {
  const li = event.target.parentElement.parentElement
  li.remove()
  toDos = toDos.filter(item => item.id !== parseInt(li.id))
  saveTodos()
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li")
  li.id = newTodoObj.id;
  const span = document.createElement("span")
  span.innerText = newTodoObj.text
  const button = document.createElement("span")
  button.innerHTML = `<i class="fa-solid fa-square-xmark"></i>`;

  button.addEventListener("click", handleDeleteTodo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveTodos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY))
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}
