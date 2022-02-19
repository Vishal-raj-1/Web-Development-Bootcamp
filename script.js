console.log("Hello World");

const addTaskButton = document.getElementById('addTask');
const input = document.getElementsByTagName('input')[0];
const todoList = document.getElementById('todo-list');
const todos = document.getElementsByClassName('todos');

// add task
addTaskButton.addEventListener('click', function () {
    if (input.value !== "") {
        const newTodo = document.createElement('li');
        newTodo.classList.add('todos');
        newTodo.innerText = input.value;
        const closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.innerText = 'X';
        newTodo.appendChild(closeButton);
        closeButton.addEventListener('click', function () {
            var todo = this.parentElement;
            todo.style.display = "none";
        })

        let todosArray = JSON.parse(localStorage.getItem('todos'));
        if(todosArray === null){
            todosArray = [input.value];
            localStorage.setItem('todos', JSON.stringify(todosArray));
        }
        else{
            todosArray.push(input.value);
            localStorage.setItem('todos', todosArray);
        }
        todoList.appendChild(newTodo);
        input.value = "";
    }
    else {
        alert('You have to write something');
    }
})
