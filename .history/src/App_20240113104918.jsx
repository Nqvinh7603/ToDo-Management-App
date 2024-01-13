import React from 'react';
import "./App.css";
import "./index.css"
import TodoApp from './todo/TodoApp';
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <div className='App'>
      <TodoApp></TodoApp>
    </div>
  );
};

export default App;