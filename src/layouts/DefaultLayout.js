import {NavLink, Outlet} from "react-router";
import {Layout, Menu} from "antd";
import {useState} from "react";

const { Header, Footer, Content } = Layout;

export function DefaultLayout() {
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const items = [
        {
            key: 'home',
            label: <NavLink to={"/"}>Home</NavLink>
        },
        {
            key: 'about-us',
            label: <NavLink to={"/about-us"}>About Us</NavLink>
        },
        {
            key: 'todo-done-list',
            label: <NavLink to={"/todo-done-list"}>Done List</NavLink>
        },
        {
            key: 'todos-1',
            label: <NavLink to={"/todos/1"}>1</NavLink>
        }
    ]

    return <Layout>
        <Header>
            <Menu onClick={onClick}
                  selectedKeys={[current]}
                  theme="dark"
                  mode="horizontal" items={items} />
        </Header>
        <Content>
            <Outlet/>
        </Content>
        <Footer>
            @Copyright yebolin 2025
        </Footer>
    </Layout>
}