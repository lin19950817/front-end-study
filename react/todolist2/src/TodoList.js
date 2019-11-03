import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button} from 'antd';
import {List, Typography} from 'antd';
import store from './store';
import { getAddItemAction, getDeleteItemAction, getInputChangeAction } from "./store/actionCreators";

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
        // store发生变化时执行 handleStoreChange函数
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <div style={{marginTop: "10px", marginLeft: "10px"}}>
                <div>
                    <Input onChange={this.handleInputChange} value={this.state.inputValue} placeholder='todo info' style={{width: "300px", marginRight: "10px"}}/>
                    <Button onClick={this.handleBtnClick} type="primary">提交</Button>
                    <List
                        style={{marginTop: "10px", width: "375px"}}
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }

    // 输入框改变事件
    handleInputChange(e){
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