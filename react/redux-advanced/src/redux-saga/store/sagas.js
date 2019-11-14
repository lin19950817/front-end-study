/**
 * saga
 *
 * @author LinZhenNan lin.zhennan@hand-china.com 2019/11/14 10:36
 */
import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";
import axios from 'axios';

function* getInitList() {
    try {
        // 本地某个 Servlet的 URL，返回 ["hello", "dell", "lee"]。
        const res = yield axios.get('http://localhost:8080/list_servlet/list.json');
        const action = initListAction(res.data);
        // redux-saga使用 put取代 store.dispach
        yield  put(action);
    } catch (e) {
        console.log("http://localhost:8080/list_servlet/list.json 网络请求失败")
    }
}

// Generator函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
