import {api} from "./api/MockApi";

export function useTodoService() {
    const loadTodos = () => {
        return api.get("/todos")
            .then(response => response.data)
    }
    const makeAsDoneTodo =  (props) =>  {
        return api.put(`/todos/${props.todo.id}`, {
            ...props.todo,
            done: !props.todo.done
        }).then(response => response.data);
    }
    const createTodo = (input) => {
        return api.post("/todos", {text: input.trim(), done: false})
            .then(response => response.data); }

    const deleteTodos = (id) => {
        return api.delete(`/todos/${id}`);
    }

    const updateTodoText = (todo, newText) => {
        return api.put(`/todos/${todo.id}`, {...todo, text: newText}).then(response => response.data);
    }

    return {loadTodos, makeAsDoneTodo, createTodo, deleteTodos, updateTodoText};
}