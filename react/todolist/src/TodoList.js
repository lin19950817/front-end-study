import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';

import axios from 'axios';

import './style.css';


class TodoList extends Component {

    constructor(props) {
        super(props);
        // 当组件的 state或者 props发生改变的时候, render函数就会重新执行   
        this.state = {
            inputValue : 'hi!!!',
            list : [
                '学习英文',
                '学习 React'
            ]
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    // 在组件即将被挂载到页面前自动执行。改名 UNSAFE_componentWillMount
    UNSAFE_componentWillMount () {
        console.log("UNSAFE_componentWillMount TodoList");
    }

    // 组件在挂载之后自动执行
    componentDidMount() {
        console.log("componentDidMount TodoList");

        axios.get('http://www.baidu.com/s?wd=hehe', {
            Host : "www.baidu.com",
            Origin : "www.baidu.com"
        })
            .then(() => {alert("success")})
            .catch(() => {alert("error")});
    }

    // 当这个组件及将被从页面中剔除的时候，会被执行
    componentWillUnmount() {
        console.log("componentWillUnmount TodoList");
    }

    // 组件在更新之前自动执行，返回值true(更新)/false(不更新)
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate TodoList");
        return true;
    }

    // 组件被更新之前自动执行，在shouldComponentUpdate执行且返回true之后执行。后改名 UNSAFE_componentWillUpdate
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("UNSAFE_componentWillUpdate TodoList");
    }

    // 组件更新之后执行
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate TodoList");
    }

    render() {
        console.log("render TodoList");
        return (
            <Fragment>
                <div>
                    {/* jsx注释 */}
                    {/* 点击时聚焦指定向, for为关键字推荐使用htmlFor */}
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        // class是关键字推荐使用 className
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}

                        // 将当前 input标签赋值给 this.input, handleInputChange方法中 e.target可以使用 this.input代替
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {console.log(index)
            return (
                <Fragment key={index}>
                    {/* 不使用组件形式
                    <li
                        key={index}
                        onClick={this.handleItemDelete.bind(this, index)}
                        // 不转义的html
                        // dangerouslySetInnerHTML={{ __html: item }}
                    >
                        {item}
                    </li>
                    */}
                    {/* 
                        使用组件 
                        通过属性(content)传递对象(item)
                    */}
                    <TodoItem
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                </Fragment>
            )
        })
    }

    handleInputChange(e) {
        // e.target
        // DOM元素节点

        // 换成异步函数提高性能
        // this.setState({
        //     inputValue : e.target.value
        // });
        const value = e.target.value;
        // setState异步，第二个参数会在第一个参数执行完后执行
        this.setState(() => ({
            inputValue : value
        }));
    }

    handleBtnClick() {
        // 换成异步函数提高性能
        // this.setState({
        //     list : [...this.state.list, this.state.inputValue],
        //     inputValue : ''
        // });
        // prevState是之前的状态
        this.setState((prevState) => ({
            // 避免不小心改变 state
            list : [...prevState.list, prevState.inputValue],
            inputValue : ''
        }));
    }

    handleItemDelete(index) {
        // immutable
        // state不允许我们做任何的改变, 克隆副本进行操作
        // this.state.list.splice(index, 1);
        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list : list
        // });
        
        // 换成异步函数
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list};
        });
    }
}

export default TodoList;