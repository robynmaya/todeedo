import React, {useState} from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Filters from './Filters';
import TodoInput from './TodoInput';
import shortid from 'shortid';
import './App.css';

function App() {
  const [ todos, setTodos ] = useState([]);
  const [ filter, setFilter ] = useState("all");

  const handleNewTodo = (todo) => {
    setTodos(todos => [...todos, {
      id: shortid.generate(),
      text: todo,
      finished: false
    }]);
  };

  const handleMarkFinished = (id, finished) => {
      setTodos(todos => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const todo = todos[todoIndex];
        todos[todoIndex] = {...todo, finished};
        return [...todos];
      });
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const numFinished = todos.filter(todo => todo.finished).length;
  const numUnfinished = todos.filter(todo => !todo.finished).length;
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'all':
        return true;
      case 'finished':
        return todo.finished;
      case 'unfinished':
        return !todo.finished;
    }
  })
  
  return (
    <div className="App">
      <Header count={numUnfinished} />
      <Filters
        {...{
          numFinished,
          numUnfinished,
          filter,
          onSwitch: setFilter
        }}
      />
      <TodoList
        {...{
          todos: filteredTodos,
          onMarkFinished: handleMarkFinished,
          onDeleteTodo: handleDeleteTodo
        }}        
      />
      <TodoInput onNewTodo={handleNewTodo} />
    </div>
  );
}

export default App;
