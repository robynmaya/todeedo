import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onChangeTodo, onMarkFinished, onDeleteTodo}) => {
  return (
    <ul className='TodoList'>
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo
            {...{
              todo,
              onChangeTodo,
              onMarkFinished,
              onDeleteTodo
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;