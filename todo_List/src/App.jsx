import { useState } from 'react'

import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'

function App() {
  

  return (
    <>
    <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
