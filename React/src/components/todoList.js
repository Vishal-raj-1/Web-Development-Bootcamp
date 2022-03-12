import React, { useState, useEffect } from "react";
import TodoItem from "./todoItem"

const TodoList = () => {
    let initialList;
    if (!localStorage.getItem('todoList')) {
        initialList = []
    }
    else {
        initialList = JSON.parse(localStorage.getItem('todoList'));
    }

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(initialList);

    const addTodo = () => {
        if (todo !== "") {
            setTodoList([...todoList, { task: todo }]);
            setTodo("");
        }
        else
            alert('Empty todo not allowed');
    }

    const deleteTodo = (task) => {
        setTodoList([...todoList.filter((todo) => todo.task !== task)]);
    }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList])

    return (
        <div className="mt-3">
            <div className="w-50 mx-auto">
                <div className="card p-3">
                    <h1 className="text-center">Todo List</h1>
                    <div className="mb-3">
                        <label htmlFor="todo" className="form-label">Todo</label>
                        <input type="text" className="form-control" value={todo} onChange={(e) => setTodo(e.target.value)} id="todo" placeholder="todo" />
                        <button className="btn btn-success mt-2" onClick={() => addTodo()}>Add Todo</button>
                    </div>
                </div>

                <div className="mt-5">
                    {
                        todoList.length === 0
                            ? (<div class="alert alert-success" role="alert">
                                <h4 class="alert-heading">Well done!</h4>
                                <p>You have successfully completed your all todo!!</p>
                            </div>)
                            : todoList.map((todo, index) => {
                                return <TodoItem task={todo.task} key={index} deleteTodo={deleteTodo} />
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList;