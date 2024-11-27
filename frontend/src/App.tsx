import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import { Todo } from '@shared/types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodoText, setNewTodoText] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const response = await axios.get(`${API_URL}/api/todos`)
    setTodos(response.data)
  }

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTodoText.trim()) return

    await axios.post(`${API_URL}/api/todos`, { text: newTodoText })
    setNewTodoText('')
    fetchTodos()
  }

  const toggleTodo = async (id: number) => {
    await axios.put(`${API_URL}/api/todos/${id}`)
    fetchTodos()
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={addTodo} className="mb-4">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add new todo"
          className="border p-2 mr-2 rounded"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center space-x-2">
            <input
              title="Toggle todo"
              placeholder="Toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="h-4 w-4"
            />
            <span 
              className={`${
                todo.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
