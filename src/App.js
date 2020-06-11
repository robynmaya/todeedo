import React, {useState, useEffect} from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Filters from './Filters';
import TodoInput from './TodoInput';
import Gif from './Gif';
import shortid from 'shortid';
import { giphyKey } from './config';
import './App.css';

const App = () => {
  const [ todos, setTodos ] = useState([]);
  const [ filter, setFilter ] = useState("all");
  const [ gifImage, setGifImage ] = useState(null);

  const numFinished = todos.filter(todo => todo.finished).length;
  const numUnfinished = todos.filter(todo => !todo.finished).length;
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'finished':
        return todo.finished;
      case 'unfinished':
        return !todo.finished;
      default:
        return true;
    }
  });

  const keyword = (filter === 'finished' && numFinished > 0) 
    ? 'congrats' 
    : 'sleepy dog';
  const gifData = "https://api.giphy.com/v1/gifs/random?" +
    `api_key=${giphyKey}&` +
    `tag=${keyword}&limit=1&offset=0&rating=G&lang=en`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(gifData);
      return await response.json();
    }
    fetchData().then(data => {
      setGifImage(data.data.images.original.url);
    });
  }, [filter, gifData]);

  const handleNewTodo = (todo) => {
    setTodos(todos => [...todos, {
      id: shortid.generate(),
      text: todo,
      finished: false
    }]);
  };

  const updateTodo = (todos, id, prop) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    // copy the todo object and merge it with the new property object
    const newTodo = {...todos[todoIndex], ...prop};
    return [
      ...todos.slice(0, todoIndex),
      newTodo,
      ...todos.slice(todoIndex + 1)
    ];
  };

  const handleChangeTodo = (id, text) => {
    setTodos(todos => updateTodo(todos, id, {text}));
  };

  const handleMarkFinished = (id, finished) => {
    setTodos(todos => updateTodo(todos, id, {finished}));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div className="App">
      <Header count={numUnfinished} />
      <Gif image={gifImage} />
      <Filters
        {...{
          numFinished,
          numUnfinished,
          filter,
          onSwitch: setFilter
        }}
      />
      <TodoInput onNewTodo={handleNewTodo} />
      <TodoList
        {...{
          todos: filteredTodos,
          onChangeTodo: handleChangeTodo,
          onMarkFinished: handleMarkFinished,
          onDeleteTodo: handleDeleteTodo
        }}        
      />
    </div>
  );
}

export default App;
