import { CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, ADD_TODO_ITEM, INIT_LIST_ACTION } from "./actionTypes";
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

// 发送异步请求 action
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

// 发送异步请求
export const getTodoList = () => {
    return (dispatch) => {
        // 本地某个 Servlet的 URL，返回 ["hello", "dell", "lee"]。
        axios.get('http://localhost:8080/list_servlet/list.json')
            .then((res) => {
                const data = res.data;
                // 创建 Action对象
                const action = initListAction(data);
                // 将 action传给 store
                dispatch(action);
            });
    }
}