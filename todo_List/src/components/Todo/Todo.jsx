import React, { useState } from 'react'

 function Todo({todoData,isFinished}) {

  // checkbox
  const [finished, setFinished] = useState(isFinished);


  return (
    <div>
        <input type='checkbox' checked={finished} onChange={(e)=> console.log(e.target.checked)}/>
      {todoData}
      <button>Edit</button>
      <button>Delete</button> 
    </div>
  )
}
export default Todo;