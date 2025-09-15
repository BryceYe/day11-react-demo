import {TodoGroup} from "./TodoGroup";
import {TodoItemGenerator} from "./TodoItemGenerator";

export function MultipleTodo() {
    return <div style={{margin: "30px"}}>
        <TodoGroup/>
        <TodoItemGenerator/>
    </div>;
}