import {useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./routes/Routes";
import axios from "axios";

const api = axios.create({
    baseURL: "https://68c7ac8e5d8d9f514732873d.mockapi.io/",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10_000
})

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(() => {
        api.get("/todos")
            .then(response => response.data)
            .then(todos => dispatch({type: "LOAD_TODOS", payload: todos}))
    },[])
    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;