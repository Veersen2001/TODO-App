import { useReducer, useState } from 'react'

import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import TodoContext from './context/todoContext'
import todoReducers from './reducers/todoReducers'

function App() {
  
  // const [list, setList] = useState([
  //   { id: 1, todoData: 'todo 1',finished:false },
  //   { id: 2, todoData: 'todo 2',finished:false }

  // ])

  const [list,dispatch] = useReducer(todoReducers,[]);
   

  return (
    <TodoContext.Provider value={{list}}>
    <AddTodo updateList={(todo) => {dispatch({type: 'add_todo', payload:{todoText: todo}})
    }}/>
      <TodoList/>
    </TodoContext.Provider>
  )
}

export default App
