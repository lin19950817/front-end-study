import React, {Component} from 'react';
import store from './store';
import {getAddItemAction, getDeleteItemAction, getInputChangeAction} from "./store/actionCreators";
import TodoListUI from './TodoListUI';
import 'antd/dist/antd.css';

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
            <TodoListUI
                list={this.state.list}
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
            );
    }

    // 输入框改变事件
    handleInputChange(e) {
        // 创建 Action对象
        // const action = {
        //     // type: 'change_input_value',
        //     // 使用 actiontypes拆分
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
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
        // const action = {
        //     // type: 'add_todo_item'
        //     // actionTypes拆分
        //     type: ADD_TODO_ITEM
        // };
        const action = getAddItemAction();

        // 向 store传 action
        store.dispatch(action);
    }

    handleItemDelete(index) {
        // action对象
        // const action = {
        //     // type: 'delete_todo_item',
        //     // actionTypes拆分
        //     type: DELETE_TODO_ITEM,
        //     index
        // };
        const action = getDeleteItemAction(index);

        // 向 store传 action
        store.dispatch(action);
    }
}

export default TodoList;