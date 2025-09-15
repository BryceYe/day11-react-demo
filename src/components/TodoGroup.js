import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate();

    function deleteToto(item) {
        dispatch({
            type: "DELETE_TODO",
            payload: {id: item.id}
        })
    }

    return <div>
        <div className={"todo-title"}>Todo List</div>
        {state.length === 0 ? (
            <div className="todo-empty">Add the things you need to do today...</div>
        ) : (
            state.map((item, index) => (
                <div className="todo-row" key={item.id}>
                    <TodoItem todo={item} index={index}/>
                    <button type="button" className={"todo-delete-button"} onClick={() => deleteToto(item)}>X</button>
                    <button type="button" className={"todo-detail-button"} onClick={() => navigate(`/todos/${item.id}`)}>Detail</button>
                </div>
            ))
        )}
    </div>;
}