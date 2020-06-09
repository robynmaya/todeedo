import React from 'react';

const Todo = props => {
  const { todo, onMarkFinished, onDeleteTodo } = props;

  return (
    <div className='Todo'>
      <input 
        type="checkbox"
        checked={todo.finished}
        onChange={() => onMarkFinished(todo.id, !todo.finished)}
      />
      {todo.text} 
      <button className='delete' onClick={() => onDeleteTodo(todo.id)}>X</button>
    </div>
  )

};

export default Todo;