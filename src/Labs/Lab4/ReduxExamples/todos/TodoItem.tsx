
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

//setting up the todo object
//init the todo structure
export default function TodoItem({ todo,
 } : {
    todo : {id: string, title: string} //id and title fields
 }) {

    const dispatch = useDispatch();

    return (
        <li key={todo.id} className="list-group-item">
            <button onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"> Delete </button>
            <button onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"> Edit </button>
            {todo.title}
        </li>
    );
}
