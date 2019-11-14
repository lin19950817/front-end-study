import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
// 即支持 redux-devtools也支持 redux-saga
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
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

// 运行 saga
sagaMiddleware.run(todoSagas);

export default store;