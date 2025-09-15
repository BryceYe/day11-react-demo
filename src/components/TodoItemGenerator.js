import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";
import {Button, Input} from "antd";

export function TodoItemGenerator() {
    const [input, setInput] = useState("");
    const {dispatch} = useContext(TodoContext);
    const {createTodo} = useTodoService();

    function handleAdd() {
        if (input.trim() === "") return;

        createTodo(input.trim())
            .then(todo => {
                dispatch({
                    type: "ADD_TODO",
                    payload: todo
                });
                setInput("");
            })
    }

    return (
        <div className={"todo-add"}>
            <Input
                type="text" value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button type="primary" className={"todo-add-button"} onClick={handleAdd}>add</Button>
        </div>
    );
}