import React from "react";

const TodoItem = ({task, deleteTodo}) => {
    return (
        <div className="my-3 p-3 bg-light">
            {task}
            <i class="float-end far fa-trash-alt text-danger" onClick={() => deleteTodo(task)}></i>
        </div>
    )
}

export default TodoItem;