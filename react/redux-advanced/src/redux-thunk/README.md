# redux-thunk
以 **[todolist2](https://github.com/lin19950817/front-end-study/tree/master/react/todolist2)** 为蓝本。就是在输入框输入值点确定后会在下方列表显示，点击下方列表某一项则会删除那一项。<br>
使用 redux-thunk中间对异步进行代码的编写
## 分离 UI组件和容器组件
将页面渲染和业务逻辑分离开来。
使用了 `antd、axios、redux、redux-thunk`<br>
```
yarn add antd
yarn add redux
yarn add axios
yarn add redux-thunk
```
### [UI组件](src/TodoListUI.js)
UI组件只负责 **页面渲染** 的组件，也称为“傻瓜组件”。
### [容器组件](src/TodoList.js)
容器组件，也称为“聪明组件”。只关注整个组件的 **业务逻辑**。
## [无状态组件](src/StatelessTodoListUI.js)
无状态组件就是一个函数。当一个普通的组件只有一个 render函数的时候，完全可以使用一个无状态组件来替换到这个普通组件。
### 无状态组件相对于普通组件的优势
性能比较高。无状态组件就是一个函数，而普通组件有各种生命周期函数和 render函数，所以无状态组件性能比较高。
## Redux中发送异步请求获取数据
1. [actionTypes](src/store/actionTypes.js) 中新建“请求”类型的常量 `initListAction`
2. [actionCreators](src/store/actionCreators.js) 中新建“请求”的 `action`
3. [TodoList](src/TodoList.js) 中 `componentDidMount()` 使用 `axios` 发送异步请求，并将结果传给 `store`
    ```
    // 发送异步请求获取数据
    componentDidMount() {
        // 本地某个 Servlet的 URL，返回 ["hello", "dell", "lee"]。
        axios.get('http://localhost:8080/list_servlet/list.json')
           .then((res) => {
                const data = res.data;
                // 创建 Action对象
                const action = initListAction(data);
                // 将 action传给 store
                store.dispatch(action);
            });
    }
    ```
## Redux-thunk
使用 redux-thunk中间件实现 ajax数据请求
1. 在 [store](src/store/index.js) 中在创建 `store` 的时候使用中间件 `redux-thunk`
2. 将异步发送数据的操作从 [组件](src/TodoList.js) 提取到 [action](src/store/actionCreators.js) 中

redux-thunk中间件是对 Dispatch进行升级<br>
![redux数据流](images/reduxDataFlow.png)