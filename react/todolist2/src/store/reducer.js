import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from "./actionTypes";

const defaultState = {
    inputValue: '',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
    ]
}

// 导出 Reducer函数，可以接收 state但不能修改 state
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何的副作用
export default (state = defaultState, action) => {
    // 处理数据
    if (action.type === CHANGE_INPUT_VALUE) {
        // 深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        // 将输入框新的值赋值给 newState
        newState.inputValue = action.value;
        // 返回处理结果
        return newState
    }
    if (action.type === ADD_TODO_ITEM) {
        // 深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        // 将 inputValue加进 list
        newState.list.push(newState.inputValue);
        // 清空 inputValue
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        // 深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        // list删除 index下标，1 项
        newState.list.splice(action.index, 1);
        return newState;
    }
    // store接收到新的 state后会替换到旧的 state
    return state;
}