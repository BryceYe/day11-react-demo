import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";
import {Button} from "antd";

export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate();
    const {deleteTodos} = useTodoService();

    function deleteToto(item) {
        deleteTodos(item.id)
            .then(
                dispatch({
                    type: "DELETE_TODO",
                    payload: {id: item.id}
                })
            )
    }

    return <div>
        <div className={"todo-title"}>Todo List</div>
        {state.length === 0 ? (
            <div className="todo-empty">Add the things you need to do today...</div>
        ) : (
            state.map((item, index) => (
                <div className="todo-row" key={item.id}>
                    <TodoItem todo={item} index={index}/>
                    <Button color="primary" variant="outlined" className={"todo-delete-button"} onClick={() => deleteToto(item)}>X</Button>
                    <Button color="primary" variant="outlined" className={"todo-detail-button"} onClick={() => navigate(`/todos/${item.id}`)}>Detail</Button>
                </div>
            ))
        )}
    </div>;
}