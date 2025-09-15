import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {api} from "../api/MockApi";

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)

    function makeAsDone() {
        api.put(`/todos/${props.todo.id}`, {
            ...props.todo,
            done: !props.todo.done
        }).then(
                dispatch({
                    type: "TOGGLE_TODO",
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