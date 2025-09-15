import {TodoGroup} from "./TodoGroup";
import {TodoItemGenerator} from "./TodoItemGenerator";

export function MultipleTodo() {
    return <div>
        <TodoGroup/>
        <TodoItemGenerator/>
    </div>;
}