import { useState } from "react";

function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const API = "http://localhost:4000/Lab5/todos";
    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a className="btn btn-primary"
                href={API}>
                Get Todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <input value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: e.target.value
                })} />
            <a className="btn btn-primary ms-3"
                href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <h3>Filtering Array Items</h3>
            <a className="btn btn-primary me-3" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <h3>Creating new Items in an Array</h3>
            <a className="btn btn-primary me-3" href={`${API}/create`}>
                Create Todo
            </a>
            <h3>Deleting from an Array</h3>
            <a className="btn btn-primary me-3"
                href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>
            <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <h3>Updating an Item in an Array</h3>
            <a className="btn btn-primary"
                href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title to {todo.title}
            </a>

            <h3>Toggle completion in an Array</h3>
            <a className="btn btn-primary me-3"
                href={`${API}/${todo.id}/completed/${todo.completed}`}>
                Check Completion for {todo.id}
            </a>
            <label>
                <input
                    type="checkbox"
                    onChange={(e) => setTodo({
                        ...todo,
                        completed: e.target.checked
                    })}
                />
                Completed
            </label>

            <h3>Change todo description</h3>
            <a className="btn btn-primary me-3"
                href={`${API}/${todo.id}/description/${todo.description}`}>
                Change description for todo with id {todo.id}
            </a>
            <label>
                <input
                    type="text"
                    value={todo.description}
                    onChange={(e) => setTodo({
                        ...todo,
                        description: e.target.value
                    })} />
            </label>
        </div>
    );
}
export default WorkingWithArrays;