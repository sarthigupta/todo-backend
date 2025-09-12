import React from 'react'
import { useState } from 'react'

const App = () => {
  const [todo,setTodo] = useState();
  const [description,setDescription] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/todos/createTodo', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        todo,
        description
      })

      
      
    })
    const data = await response.json();
    console.log(data);
    } catch (error) {
      console.log(error);
      
    }

    setTodo("");
    
  }

  return (
    <div>
      <input type="text" name="todo" id="" placeholder='Enter ToDo' onChange={(e) => setTodo(e.target.value)}/> <br />
      <input type="text" name="description" id="" placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)} /> <br />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  )
}

export default App