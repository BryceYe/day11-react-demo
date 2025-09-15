import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {MultipleTodo} from "./components/MultipleTodo";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";

function DefaultLayout() {
    return <div>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
}

const routes = createBrowserRouter([
    {
        path:"/",
        element:<DefaultLayout/>,
        children:[
            {
                path:"/",
                element: <MultipleTodo />
            }
        ]
    }
])

export const initState = [
    {id: 1, text: "This is the first thing I need to do", done: false},
    {id: 2, text: "This is the second thing I need to do", done: false},
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;