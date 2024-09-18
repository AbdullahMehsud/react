import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [editTodo, setEditTodo] = useState('')
  const [editId, setEditId] = useState('')

  const clearEdit = () => {
    setEditTodo('')
    setEditId('')
  };

  const editHandler = (todo) => {
      setEditTodo(todo)
      setEditId(todo.id)
  }
  return (
    <>
     <h1>Learn about redux toolkit</h1>
     <AppTodo editTodo={editTodo} editId={editId} clearEdit={clearEdit}/>
     <Todos setEditTodo={editHandler}/>
    </>
  )
}

export default App
