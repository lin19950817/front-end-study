import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
// 引入 redux-thunk组件
import thunk from 'redux-thunk';

// 即支持 redux-devtools也支持 redux-thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

// 创建 Store
const store = createStore(
    // 依赖 reducer
    reducer,
    // 创建 store时使用中间件
    // applyMiddleware(thunk),
    // chrome Redux插件所需要的参数，也是中间件
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    enhancer
);

export default store;