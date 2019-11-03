import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import MyJsx from './MyJsx';
import TodoList from './TodoList';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyJsx />, document.getElementById('root1'));

ReactDOM.render(<TodoList />, document.getElementById('root2'));

        