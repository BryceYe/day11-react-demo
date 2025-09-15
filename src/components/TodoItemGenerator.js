import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoItemGenerator() {
    const [input, setInput] = useState("");
    const {dispatch} = useContext(TodoContext);

    function handleAdd() {
        if (input.trim() === "") return;
        dispatch({
            type: "ADD_TODO",
            payload: {text: input}
        });
        setInput("");
    }

    return (
        <div className={"todo-add"}>
            <input
                type="text" value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="button" className={"todo-add-button"} onClick={handleAdd}>add</button>
        </div>
    );
}