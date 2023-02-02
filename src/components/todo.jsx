
import React from 'react'

const style = {
  li: 'flex text-sm justify-between rounded-md p-2 mb-2 mt-2 ml-4 mr-4 bg-slate-200',
  liComplete: 'flex text-sm justify-between rounded-md p-2 mb-2 mt-2 ml-4 mr-4 bg-red-300',
  row: 'flex',
  text: 'ml-4 cursor-pointer',
  textComplete: 'ml-4 cursor-pointer line-through',
  button: 'cursor-pointer flex items-center'
}

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
        <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>🗑</button>
    </li>
  )
}

export default Todo
