import React, {useState} from 'react';

const TodoInput = ({onNewTodo}) => {
  const [ value, setValue ] = useState("");

  const handleChange = e => {
    setValue(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim() || value.length < 2) {
      return;
    }
    onNewTodo(value);
    setValue("");
  };

  return (
    <form 
      className='TodoInput'
      onSubmit={handleSubmit}
    >
      <label htmlFor="todoInput">Enter a new todo:</label>
      <input
        placeholder="Feed the dogs"
        id="todoInput"
        value={value}
        onChange={handleChange} 
      />
    </form>
  );
};

export default TodoInput;