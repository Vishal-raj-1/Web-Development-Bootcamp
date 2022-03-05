const addTaskButton = document.getElementById("add-task");
const input = document.getElementsByTagName("input")[0];
const todoList = document.getElementById("todo-list");

const showTasks = () => {
  let todos = localStorage.getItem("todos");
  if (todos === null) {
    return;
  }

  const todosArray = JSON.parse(todos);
  todos = '';
  todosArray.forEach((todo, index) => {
    todos += `<li class="todos">${todo}<span class="close" onclick="deleteTask(${index})">X</span></li>`
  });
  todoList.innerHTML = todos;
};

const addTask = () => {
  if (input.value == "") {
    return alert("You have to write something");
  }

  let todos = localStorage.getItem("todos");
  let todosArray;
  if (todos === null) {
    todosArray = [input.value];
    localStorage.setItem("todos", JSON.stringify(todosArray));
  } else {
    todosArray = JSON.parse(todos);
    todosArray.push(input.value);
    localStorage.setItem("todos", JSON.stringify(todosArray));
  }
  input.value = "";
  showTasks();
};

function deleteTask(index){
  let todos = localStorage.getItem('todos');
  if(todos === null){
      return;
  }
  todos = JSON.parse(todos);
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  showTasks();
}

showTasks();
addTaskButton.addEventListener("click", addTask);
