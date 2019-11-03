# React demo
***
**学习 React**
***


## React的生命周期函数
> 指在某一个时刻组件会自动调用执行的函数
> ### Initialization
>> setup  
>> props  
>> state  
> ### Mounting(挂载)
>> componentWillMount(在组件即将被挂载到页面的时刻前自动执行)  
>> render(当组件的 state或者 props发生改变的时候, render函数就会重新执行。子组件的 render也重新执行)  
>> componentDidMount(组件在挂载之后自动执行)  
> ### Updation
>> #### props  
>>> componentWillReceiveProps(子组件从父组件接收参数(第一次存在父组件中不会执行)，当父组件 render执行后自动执行)  
>>> shouldComponentUpdate(组件在更新之前自动执行，返回值 true(更新)/false(不更新))  
>>> componentWillUpdate(组件被更新之前自动执行，在 shouldComponentUpdate执行且返回 true之后执行)  
>>> render  
>>> componentDidUpdate(组件更新完之后自动执行)  
>> #### states  
>>> shouldComponentUpdate  
>>> componentWillUpdate  
>>> render  
>>> componentDidUpdate  
> ### Unmounting
>> componentWillUnmount(当这个组件及将被从页面中剔除的时候，会被执行)
