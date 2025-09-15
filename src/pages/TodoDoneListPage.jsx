import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";
import "./css/TodoDoneListPage.css"
export function TodoDoneListPage() {
    const {state} = useContext(TodoContext)

    return <div className="todo-done-list">
        <div className={"todo-title"}>Done List</div>
        {state.length === 0 ? (
            <div className="todo-empty">Add the things you need to do today...</div>
        ) : (
            state.filter(item => item.done).map((item, index) => (
                <div className="todo-row" key={item.id}>
                    <TodoItem todo={item} index={index}/>
                </div>
            ))
        )}
    </div>;
}