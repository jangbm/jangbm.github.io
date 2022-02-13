const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";
const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
    const li = event.target.parentElement;
    li.remove();
};

const paintToDo = (newTodo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "★";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

const handleToDoForm = (event) => {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
    toDos.push(newTodo);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoForm);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
