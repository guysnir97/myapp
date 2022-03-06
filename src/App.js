import logo from './logo.svg';
import './App.css';

import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';
import { useEffect, useState } from 'react';



function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const onLoadTodos = async () => {
      const models = await DataStore.query(Todo);
      setTodos(models)
      console.log(models);
    }
    onLoadTodos()

  }, [])


  const onCreateTodo = async () => {
    console.log('todo')
    await DataStore.save(
      new Todo({
        "name": "do it",
        "description": "do it"
      })
    );
  }

  return (
    <div className="App">
      <h1>hello world</h1>
      {todos.map(todo => (
        <li key={todo.id}>{todo.name}</li>
      ))}
      <button onClick={onCreateTodo}>click here!</button>
    </div>
  );
}

export default App;
