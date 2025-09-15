import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {ErrorPage} from "../pages/ErrorPage";
import {HomePage} from "../pages/HomePage";
import {TodoDetailPage} from "../pages/TodoDetailPage";
import {AboutUs} from "../pages/AboutUs";
import {TodoDoneListPage} from "../pages/TodoDoneListPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage/>
            },
            {
                path: "/about-us",
                element: <AboutUs/>
            },
            {
                path: "/todo-done-list",
                element: <TodoDoneListPage/>
            }
        ]
    }
])