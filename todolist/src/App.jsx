import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (!input) return
    setTodos([...todos, input])
    setInput('')
  }
  const removeTodo = (idx) => {
    const newTodos = todos.filter((_, index) => index !== idx)
    setTodos(newTodos)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 rounded shadow-md w-full max-w-md flex flex-col items-center text-white">
        <h1 className='text-2xl font-bold mb-4 text-center'>Todo List</h1>
        <form className="w-full flex flex-col items-center" onSubmit={addTodo}>
          <input
            className='border-2 border-gray-300 rounded-md p-2 mb-4 w-full'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder='enter Todo'
          />
          <button
            type="submit"
            className='bg-blue-500 text-white hover:bg-blue-600 rounded-md p-2 w-full mb-4'
          >
            Add Todo
          </button>
        </form>
        <ul className="w-full">
          {todos.map((todo, idx) => (
            <li key={idx} className="flex justify-between items-center mb-2">
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(idx)}
                className='bg-red-500 text-white hover:bg-red-600 w-5  rounded-md p-1 ml-2'
              >-</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
