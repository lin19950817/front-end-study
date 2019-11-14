# redux-advanced
以 [UI-Container](../UI-Container) 为蓝本，删除 redux-thunk部分。<br>
使用 redux-saga中间对异步进行代码的编写<br>
使用了 `antd、axios、redux、redux-saga`<br>
```
yarn add antd
yarn add redux
yarn add axios
yarn add redux-saga
```
## Redux-saga
使用 redux-saga中间件 ajax数据请求
1. 在 [store](store/index.js) 中在创建 `store` 的时候使用中间件 `redux-saga`
2. 编写 [Generator函数(sagas)](store/sagas.js)，并在 [store](store/index.js) 中引入并运行
3. 在 [TodoList](TodoList.js) 的 `componentDidMount` 中调用 `store.dispach(action)` 时调用的是 [saga](store/sagas.js) 中的 `mySaga`
4. [saga](store/sagas.js) 中使用 redux-saga使用 put取代 store.dispach。