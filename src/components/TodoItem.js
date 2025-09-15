import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)

    const {makeAsDoneTodo} = useTodoService();

    function makeAsDone() {
        makeAsDoneTodo(props)
            .then(
                dispatch({
                    type: "UPDATE_TODO",
                    payload: {id: props.todo.id}
                })
            )
    }

    return <div className={"todo-item"}>
        <span className={props.todo.done ? "todo-done" : ""} onClick={makeAsDone}>
            {props.todo.text}
        </span>
    </div>;
}