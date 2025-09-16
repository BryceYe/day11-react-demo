import {useContext, useState} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";
import {Button, Input, Modal, Space} from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
export function TodoGroup() {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate();
    const {deleteTodos} = useTodoService();
    const {updateTodoText} = useTodoService();

    function deleteToto(item) {
        deleteTodos(item.id)
            .then(
                dispatch({
                    type: "DELETE_TODO",
                    payload: {id: item.id}
                })
            )
    }

    function openEditModal(item) {
        setCurrentItem(item);
        setIsOpenEditModal(true);
    }

    function handleOk() {
        setIsOpenEditModal(false);
        if (currentItem && currentItem.text.trim() !== "") {
            updateTodoText(currentItem, currentItem.text.trim())
                dispatch({
                    type: "UPDATE_TODO_TEXT",
                    payload: currentItem
                })
        }
        setCurrentItem(null);
    }

    function handleCancel() {
        setIsOpenEditModal(false);
        setCurrentItem(null);
    }

    return <div>
        <div className={"todo-title"}>Todo List</div>
        {state.length === 0 ? (
            <div className="todo-empty">Add the things you need to do today...</div>
        ) : (
            state.map((item, index) => (
                <div className="todo-row" key={item.id}>
                    <TodoItem todo={item} index={index}/>
                    <Space size="small">
                        <Button
                            type="primary"
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => deleteToto(item)}
                            size="small"
                        />
                        <Button
                            type="default"
                            icon={<EditOutlined />}
                            onClick={() => openEditModal(item)}
                            size="small"
                        />
                        <Button
                            type="primary"
                            icon={<EyeOutlined />}
                            onClick={() => navigate(`/todos/${item.id}`)}
                            size="small"
                        />
                    </Space>
                </div>
            ))
        )}
        <Modal
            open={isOpenEditModal}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <div>Edit Todo</div>
            <Input
                value={currentItem?.text || ''}
                onChange={(e) => setCurrentItem({ ...currentItem, text: e.target.value })}
            />
        </Modal>
    </div>;
}