import React, {useState} from 'react';

const TodoInput = ({onNewTodo}) => {
  const [ value, setValue ] = useState("");

  const handleChange = e => {
    setValue(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    onNewTodo(value);
    setValue("");
  };

  return (
    <form className='TodoInput' onSubmit={handleSubmit}>
      <input 
        placeholder="Enter a new todo"
        value={value}
        onChange={handleChange} 
      />
    </form>
  );
};

export default TodoInput;