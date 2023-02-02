import React, { useState, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from './todo'
import { db } from './firebase'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc
} from 'firebase/firestore'

const style = {
  container: 'bg-slate-100 max-w-[400px] w-full m-auto rounded-md shadow-xl',
  heading: 'text-2xl font-bold text-center text-gray-800 mt-2 mb-2',
  form: 'flex justify-between mb-2 mt-2 ml-4 mr-4',
  input: 'border p-2 w-full text-sm rounded-md mt-4',
  button: 'border p-2 ml-2 bg-black text-slate-100 rounded-md mt-4',
  count: 'text-center p-2 text-xs'
}

function Controller () {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e)
    if (input === '') {
      // eslint-disable-next-line no-undef
      alert('Please enter a valid task')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false
    })
    setInput('')
  }

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [])

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Add Task'
          />
          <button className={style.button}>
            <AiOutlinePlus size={20} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1
          ? null
          : (
            <p className={style.count}>{`You have ${todos.length} todos`}</p>
            )}
      </div>
    </div>
  )
}

export default Controller
