import React from 'react';

const Todo = props => {
  const { todo, onChangeTodo, onMarkFinished, onDeleteTodo } = props;

  const handleChange = e => {
    onChangeTodo(todo.id, e.target.value);
  };

  return (
    <div className='Todo'>
      <input
        className="tickbox"
        type="checkbox"
        checked={todo.finished}
        onChange={() => onMarkFinished(todo.id, !todo.finished)}
      />
      <input
        className="content"
        value={todo.text}
        onChange={handleChange}
      />
      <button className='delete' onClick={() => onDeleteTodo(todo.id)}>X</button>
    </div>
  )

};

export default Todo;