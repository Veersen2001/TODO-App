import React, { useContext, useState } from 'react'
import Todo from '../Todo/Todo';
import todoContext from '../../context/todoContext';

function TodoList() {
  const { list, setList } = useContext(todoContext);


  function onFinished(todo,isFinished)
  {
    const updatedList = list.map(t => {
      if (t.id == todo.id) {
        todo.finished = isFinished;
      }
      return t;
    });
    setList(updatedList);
  
  }


   function onDelete(todo)
   {
     const updatedList = list.filter(t => t.id != todo.id)
     setList(updatedList);
   }

   


   
  return (
    <div> 

    {list.length>0 && list.map(todo => <Todo 
      key = {todo.id}
      id={todo.id} 
      isFinished={todo.finished} 
      todoData = {todo.todoData} 
      changeFinished={(isFinished)=>onFinished(todo,isFinished)}
      onDelete = {()=>onDelete(todo)}

      onEdit= {(todoText)=>{
        const updatedList = list.map(t => {
          if (t.id == todo.id) {
            todo.todoData = todoText;
          }
          return t;
        });
        setList(updatedList);


      }}

     /> )}
    </div>
  )
}
export default TodoList;