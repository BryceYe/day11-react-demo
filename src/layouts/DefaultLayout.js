import {NavLink, Outlet} from "react-router";

export function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/todos/1"}>1</NavLink></li>
                    <li><NavLink to={"/about-us"}>about-us</NavLink></li>
                    <li><NavLink to={"/todo-done-list"}>todo-done-list</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}