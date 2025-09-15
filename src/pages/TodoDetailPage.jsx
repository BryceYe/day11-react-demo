import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";
import "./css/TodoDetailPage.css"

export function TodoDetailPage() {
    const {id} = useParams();
    const {state} = useContext(TodoContext)
    console.log(state)
    const todo = state.filter((todo) => todo.id === id)
    if (todo.length === 0) {
        return <div>Todo not found</div>
    }

    return <div className={"container"}>
        <TodoItem todo={todo[0]} index={id}/>
    </div>
}