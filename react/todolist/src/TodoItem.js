import React from 'react';
// 校验
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        // 比放在 onClick里节约一些性能
        this.handleClick = this.handleClick.bind(this);
    }

    // 组件在更新之前自动执行，返回值 true(更新)/false(不更新)
    // 当 content不改变时不更新组件
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate TodoItem');
        return nextProps.content !== this.props.content ? true : false;
    }

    // 子组件从父组件接收参数(第一次存在父组件中不会执行)，当父组件render执行后自动执行。改名 UNSAFE_componentWillReceiveProps
    UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
        console.log('UNSAFE_componentWillReceiveProps TodoItem');
    }

    // 当父组件的 render函数被运行时,它的子组件的 render都将被重新运行
    render() {
        console.log('render TodoItem');
        const {content, test} = this.props;
        // JSX -> js对象 -> 真实的 DOM
        // 两者效果一样
            // return React.createElement('div', {}, 'item');
        // return (<div>item</div>);
        
        return (
            <li onClick={this.handleClick}>
                {content} - {test}
            </li>
        );
    }

    handleClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

// 对组件属性进行强校验
TodoItem.propTypes = {
    // content属性必须是 String类型
    content : PropTypes.string,
    // deleteItem属性必须是 function类型
    deleteItem : PropTypes.func,
    // index : 属性可以是 number, String
    index : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // 如果属性没传则不校验, isRequired为必须传
    test : PropTypes.string.isRequired
}

// 默认值
TodoItem.defaultProps = {
    test : 'hello word'
}

export default TodoItem;