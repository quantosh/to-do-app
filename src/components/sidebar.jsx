
import React from 'react'

const style = {
  sidebar: 'text-sm rounded-md p-2 mt-2 mr-2 ml-2 bg-slate-200 shadow-xl max-w-[200px] w-full',
  li: 'flex text-sm justify-between rounded-md p-2 mb-2 mt-2 ml-4 mr-4 bg-slate-200',
  liComplete: 'flex text-sm justify-between rounded-md p-2 mb-2 mt-2 ml-4 mr-4 bg-red-300',
  row: 'flex',
  text: 'ml-4 cursor-pointer',
  textComplete: 'ml-4 cursor-pointer line-through',
  button: 'cursor-pointer flex items-center'
}

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className='flex'>
        <div>
          <img className='ml-2 rounded-full w-11 h-11' src='https://api.dicebear.com/5.x/initials/svg?seed=Abby' alt='avatar' />
        </div>
        <div className='ml-3 text-xs'>
          <p>John Doe</p>
          <p>user@johndoe.net</p>
        </div>
      </div>
      <form className='justify-between'>
        <input className='rounded w-full bg-slate-300 p-1 ml-1 mt-3 text-slate-700 placeholder-slate-700' type='text' placeholder='🔍 Search' />
      </form>
      <div className='block text-xs p-1 ml-1 '>
        <p className='text-left mb-1 mt-1'>📓 My day</p>
        <p className='text-left mb-1 mt-1'>⭐ Important</p>
        <p className='text-left mb-1 mt-1'>📅 My day</p>
        <p className='text-left mb-1 mt-1'>✏ Tasks</p>
        <ul className='ml-3'>
          <li>- Work</li>
          <li>- Personal</li>
          <li>- Household</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
