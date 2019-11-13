import { createStore } from 'redux';
import reducer from './reducer';


// 创建 Store
const store = createStore(
    // 依赖 reducer
    reducer,
    // chrome Redux插件所需要的参数，也是中间件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;