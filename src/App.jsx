import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (newItem) => {
    if (newItem === '') return
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }]
    })
  }

  const toggleTodo = (id, check) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: check }
        }
        return todo;
      })
    })

  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />

    </>
  )
}

export default App
