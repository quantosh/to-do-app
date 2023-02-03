import React from 'react'

const style = {
  container: 'flex items-center justify-center h-screen w-screen bg-gray-100'
}

function Welcome () {
  return (
    <div className={style.container}>
      <div>
        <h1 className='text-4xl font-bold'>Welcome to Task Manager</h1>
        <p className='text-lg mt-4 w'>Get organized and stay on top of your tasks</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Welcome
