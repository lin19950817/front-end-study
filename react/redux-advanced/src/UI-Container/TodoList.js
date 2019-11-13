/**
 * 容器组件
 *
 * @author LinZhenNan lin.zhennan@hand-china.com 2019/11/12 17:13
 */
import React, {Component} from 'react';
import store from './store';
import {getAddItemAction, getDeleteItemAction, getInputChangeAction, initListAction} from "./store/actionCreators";
import StatelessTodoListUI from './StatelessTodoListUI';
import 'antd/dist/antd.css';
import axios from 'axios';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        // 输入框值改变事件
        this.handleInputChange = this.handleInputChange.bind(this);
        // store改变事件
        this.handleStoreChange = this.handleStoreChange.bind(this);
        // 按钮点击事件
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // item点击删除事件
        this.handleItemDelete = this.handleItemDelete.bind(this);
        // store发生变化时执行 handleStoreChange函数
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            // 使用 UI组件
            // <TodoListUI

            // 使用无状态组件
            <StatelessTodoListUI
                list={this.state.list}
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
            );
    }

    // 发送异步请求获取数据
    componentDidMount() {
        // 本地某个 Servlet的 URL，返回 ["hello", "dell", "lee"]。
        axios.get('http://localhost:8080/list_servlet/list.json')
            .then((res) => {
                const data = res.data;
                // 创建 Action对象
                const action = initListAction(data);
                // 将 action传给 store
                store.dispatch(action);
            });
    }

    // 输入框改变事件
    handleInputChange(e) {
        // 创建 Action对象
        const action = getInputChangeAction(e.target.value);
        // 将 action传给 store
        store.dispatch(action);
    }

    // store改变事件
    handleStoreChange(e) {
        this.setState(store.getState());
    }

    handleBtnClick(e) {
        // action对象
        const action = getAddItemAction();
        // 向 store传 action
        store.dispatch(action);
    }

    handleItemDelete(index) {
        // action对象
        const action = getDeleteItemAction(index);
        // 向 store传 action
        store.dispatch(action);
    }
}

export default TodoList;